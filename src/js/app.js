import WidgetCard from './WidgetCard';
import WidgetLogic from './WidgetLogic';

const ret = new WidgetCard();
const yy = new WidgetLogic();

ret.buildForm();

document.addEventListener('input', () => {
  yy.proto();
});
