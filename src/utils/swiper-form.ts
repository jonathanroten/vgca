import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const FORM_ERROR_SELECTOR = '.form_modal_error';

/** RFC 5322 simplified – common email pattern */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Phone: digits with optional spaces, dashes, dots, parens, plus. At least 7 digits. */
const PHONE_REGEX = /^[\d\s\-.()+]*$/;
const MIN_PHONE_DIGITS = 7;

/** Name: letters, spaces, hyphens, apostrophes only. Min 2 chars. No symbols (@, #, !, etc.). */
const NAME_REGEX = /^[a-zA-Z\u00C0-\u024F\s\-']+$/;
const MIN_NAME_LENGTH = 2;
const NAME_FIELDS = ['First-Name', 'Last-Name'];

function validateField(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
  const value = field.value.trim();
  field.setCustomValidity('');

  if (field.hasAttribute('required') && !value) {
    field.setCustomValidity('This field is required.');
    return false;
  }

  if (!value) return true;

  if (field instanceof HTMLInputElement) {
    if (field.type === 'email' && !EMAIL_REGEX.test(value)) {
      field.setCustomValidity('Please enter a valid email address.');
      return false;
    }
    if (field.type === 'tel') {
      const digits = value.replace(/\D/g, '');
      if (!PHONE_REGEX.test(value) || digits.length < MIN_PHONE_DIGITS) {
        field.setCustomValidity('Please enter a valid phone number (at least 7 digits).');
        return false;
      }
    }
    if (NAME_FIELDS.includes(field.name)) {
      if (value.length < MIN_NAME_LENGTH) {
        field.setCustomValidity('Please enter at least 2 characters.');
        return false;
      }
      if (!NAME_REGEX.test(value)) {
        field.setCustomValidity('Please use only letters. Symbols like @, #, ! are not allowed.');
        return false;
      }
    }
  }

  return true;
}

function validateSlide(slideEl: HTMLElement): boolean {
  const form = slideEl.closest('form');
  const formWrapper = form?.parentElement;
  const formErrorEl = (form?.querySelector(FORM_ERROR_SELECTOR) ??
    formWrapper?.querySelector(FORM_ERROR_SELECTOR)) as HTMLElement | null;

  const fields = slideEl.querySelectorAll<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >('input:not([type="hidden"]), select, textarea');
  let valid = true;
  let firstInvalid: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = null;

  for (const field of fields) {
    if (!validateField(field)) {
      valid = false;
      field.classList.add('is-error');
      if (!firstInvalid) firstInvalid = field;
    } else {
      field.classList.remove('is-error');
    }
  }

  if (formErrorEl) {
    formErrorEl.style.display = valid ? 'none' : 'block';
  }

  for (const field of fields) field.reportValidity();

  if (firstInvalid) firstInvalid.focus();

  return valid;
}

export const initFormSwiper = () => {
  const swiperInstances = document.querySelectorAll('[data-swiper-element="form-instance"]');
  swiperInstances.forEach((instance) => {
    const nextBtn = instance.querySelector(
      '[data-swiper-element="next"]'
    ) as HTMLButtonElement | null;
    const prevBtn = instance.querySelector(
      '[data-swiper-element="prev"]'
    ) as HTMLButtonElement | null;
    const paginationEl = instance.querySelector(
      '[data-swiper-element="pagination"]'
    ) as HTMLElement | null;

    if (!nextBtn || !prevBtn) {
      return;
    }

    const swiper = new Swiper(instance as HTMLElement, {
      modules: [Navigation, ...(paginationEl ? [Pagination] : [])],
      slidesPerView: 1,
      allowTouchMove: false,
      speed: 300,
      navigation: { nextEl: nextBtn, prevEl: prevBtn },
      pagination: paginationEl ? { el: paginationEl, clickable: false } : false,
    });

    // Validate before Next; block Navigation module's handler if invalid (capturing phase)
    nextBtn.addEventListener(
      'click',
      (e) => {
        const currentSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
        if (!validateSlide(currentSlide)) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );
  });
};
