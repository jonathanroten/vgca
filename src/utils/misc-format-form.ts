export const initFormatForm = () => {
  const contactWrap = document.querySelector('.contact_wrap');
  const form = contactWrap?.querySelector<HTMLFormElement>('#wf-form-primary-contact');

  if (!contactWrap || !form) {
    return;
  }

  form.addEventListener('submit', function () {
    const checkboxes = form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    const selectedLabels: string[] = [];

    checkboxes.forEach(function (box) {
      if (box.checked) {
        const label = box.closest('label');
        if (label) {
          selectedLabels.push('• ' + (label.textContent || '').trim());
        }
      }
    });

    if (selectedLabels.length > 0) {
      const hidden = document.createElement('input');
      hidden.type = 'hidden';
      hidden.name = 'Client Interests';
      hidden.value = '<br>' + selectedLabels.join('<br>');
      form.appendChild(hidden);
    }

    checkboxes.forEach((box) => box.remove());
    form.style.display = 'none';
    return true;
  });
};
