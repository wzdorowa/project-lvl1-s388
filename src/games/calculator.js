import { getRandomInRange } from '../helpers';
import engine from '../engine';

const getRandomOperationSign = () => {
  const randomSign = getRandomInRange(1, 3);
  switch (randomSign) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return console.log('Unknown value');
  }
};

const applyOperation = (sign, firstNum, lastNum) => {
  switch (sign) {
    case '+': return firstNum + lastNum;
    case '-': return firstNum - lastNum;
    case '*': return firstNum * lastNum;
    default: return console.log('Unknown value');
  }
};

export const description = 'What is the result of the expression?';

export const getQuestion = () => {
  const firstQuestion = getRandomInRange(1, 30);
  const lastQuestion = getRandomInRange(1, 20);
  const sign = getRandomOperationSign();

  const question = {
    value: `${firstQuestion} ${sign} ${lastQuestion}`,
    payload: {
      firstQuestion,
      lastQuestion,
      sign,
    },
  };

  return question;
};

export const getRightAnswer = question => applyOperation(
  question.payload.sign,
  question.payload.firstQuestion,
  question.payload.lastQuestion,
);
const play = () => engine(description, getQuestion, getRightAnswer);
export default play;
