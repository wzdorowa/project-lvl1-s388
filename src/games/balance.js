import { getRandomInRange } from '../helpers';
import engine from '../engine';

const description = '';


const balance = (number) => {
  const startNumber = number.toString();
  const lengthNumber = startNumber.length;
  let sumNumber = 0;
  for (let index = 0; index < lengthNumber; index += 1) {
    sumNumber += Number(startNumber[index]);
  }
  const base = Math.floor(sumNumber / lengthNumber);
  const remainder = sumNumber % lengthNumber;
  let result = '';
  for (let index = 0; index < lengthNumber; index += 1) {
    if (index < lengthNumber - remainder) {
      result += base.toString();
    } else {
      result += (base + 1).toString();
    }
  }
  return result;
};

const getGameData = () => {
  const question = getRandomInRange(1, 1000);

  const answer = String(balance(question));

  return {
    question,
    answer,
  };
};

export default() => engine(description, getGameData);
