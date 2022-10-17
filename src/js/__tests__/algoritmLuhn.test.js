import validCardCC from '../algoritmLuhn';

test('Проверка по Алгоритму Луна - верно', () => {
  expect(validCardCC(448564168479322)).toBe(true);
});

test('Проверка по Алгоритму Луна - неверно', () => {
  expect(validCardCC(44856416847932)).toBe(false);
});
