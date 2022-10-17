import WidgetLogic from '../WidgetLogic';

describe('проверка длинны номера карты', () => {
  test('16 знаков - Мир, Visa, MasterCard ', () => {
    const number = new WidgetLogic();
    number.checkLengthInputValue(2201540674870371);
    expect(number.item).toBe(2201540674870371);
  });

  test('13 знаков - Visa', () => {
    const number = new WidgetLogic();
    number.checkLengthInputValue('4773 292578596');
    expect(number.item).toBe(4773292578596);
  });

  test('7 знаков - ошибка', () => {
    const number = new WidgetLogic();
    number.checkLengthInputValue(2201540);
    expect(number.item).toBe(null);
  });
});

describe('проверка принадлежности карты', () => {
  test('карта - Мир', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard(2201540674870371)).toBe('mir');
  });

  test('карта - Visa', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard(4916248307949941)).toBe('visa');
  });

  test('карта - MasterCard (52)', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard(5274893186844300)).toBe('mastercard');
  });

  test('карта - MasterCard (2720)', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard(2720554990422249)).toBe('mastercard');
  });

  test('карта - MasterCard (2221)', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard(2221739656955905)).toBe('mastercard');
  });

  test('карта - пустое знаечение', () => {
    const ttt = new WidgetLogic();
    expect(ttt.checkCard('')).toBe(false);
  });
});
