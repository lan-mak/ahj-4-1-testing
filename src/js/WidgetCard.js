import visa from '../img/card-icon/visa.png';
import masterCard from '../img/card-icon/mastercard.png';
import mir from '../img/card-icon/mir.png';

export default class WidgetCard {
  constructor() {
    this.body = document.querySelector('body');
  }

  buildForm() {
    const widget = `
    <div class="widget">
      <div class="card">
        <img src="${visa}" class="visa">
        <img src="${masterCard}" class="mastercard">
        <img src="${mir}" class="mir">
      </div>
      <form>
        <input type="text">
        <button type="submit">Проверить карту</button>
      </form>
    </div>
    `;

    this.body.insertAdjacentHTML('afterbegin', widget);
  }

  statusCheckLuhn(status) {
    if (status === 'passed') {
      this.body.insertAdjacentHTML('beforeend', '<div class="luhn">✅  Проверка луна</div>');
    }

    if (status === 'false') {
      this.body.insertAdjacentHTML('beforeend', '<div class="luhn">❌ Проверка луна</div>');
    }
  }
}
