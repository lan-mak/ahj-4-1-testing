export default function validCardCC(value) { // eslint-disable-line
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0;
  let bEven = false;
  const number = value.toString();

  for (let n = number.length - 1; n >= 0; n--) {
    const cDigit = number.charAt(n);
    let nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9; // eslint-disable-line
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  if (nCheck === 0) {
    return false;
  } if (nCheck !== 0) {
    return (nCheck % 10) == 0; // eslint-disable-line
  }
}
