import validCardCC from './algoritmLuhn';

export default class WidgetLogic {
  constructor() {
    this.item = null;
  }

  inputValue() {
    this.checkLengthInputValue(document.querySelector('input').value);
  }

  checkLengthInputValue(value) {
    value = String(value).replace(/\D/g, ""); // eslint-disable-line
    if (/\d{13,16}/.test(value)) {
      this.item = Number(value);
    }
  }

  checkCard(numberCard) {
    const visa = /^(4)/;
    const mir = /^(220[0-4])/;
    const masterCard = /(^(5[1-5])|^2221|^2720)/;

    if (visa.test(numberCard)) {
      return 'visa';
    }

    if (mir.test(numberCard)) {
      return 'mir';
    }

    if (masterCard.test(numberCard)) {
      return 'mastercard';
    }

    return false;
  }

  disableImg(card) {
    this.icons = document.querySelectorAll('.card img');

    if (card !== false) {
      this.icons.forEach((item) => {
        if (!item.classList.contains(card)) {
          item.classList.add('disable');
        }
      });
    } else {
      this.icons.forEach((item) => {
        if (item.classList.contains('disable')) {
          item.classList.remove('disable');
        }
      });
    }
  }

  luhn() {
    if (this.item !== null) {
      return validCardCC(this.item);
    }

    return false;
  }
}
