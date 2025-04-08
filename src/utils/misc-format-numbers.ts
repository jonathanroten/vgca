export const initFormatNumber = () => {
  // Select all elements that have the number
  const numbers = document.querySelectorAll('[data-format-number="true"]');
  numbers.forEach((el) => {
    const currentNumber = el as HTMLElement;
    const formatedNumber = parseInt(currentNumber.textContent || '0', 10);
    if (!isNaN(formatedNumber)) {
      currentNumber.textContent =
        formatedNumber < 10 ? '0' + formatedNumber : formatedNumber.toString();
    }
  });
};
