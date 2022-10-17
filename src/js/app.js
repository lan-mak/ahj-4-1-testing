import WidgetCard from './WidgetCard';
import WidgetLogic from './WidgetLogic';

const ui = new WidgetCard();
ui.buildForm();
const logic = new WidgetLogic();

let timeOut;

document.addEventListener('input', () => {
  logic.item = null;
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    logic.inputValue();
    logic.disableImg(logic.checkCard(logic.item));
  }, 1000);
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  if (logic.luhn()) {
    ui.statusCheckLuhn('passed');
  } else {
    ui.statusCheckLuhn('false');
  }
});
