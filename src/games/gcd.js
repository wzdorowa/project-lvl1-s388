import { getRandomInRange } from '../helpers';
import engine from './engine';

export const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const firstQuestion = getRandomInRange(1, 30);
  const lastQuestion = getRandomInRange(1, 20);

  const question = {
    value: `${firstQuestion} ${lastQuestion}`,
    payload: {
      firstQuestion,
      lastQuestion,
    },
  };
  return question;
};

const getRightAnswer = question => findGcd(
  question.payload.firstQuestion,
  question.payload.lastQuestion,
);

const play = () => engine(description, getQuestion, getRightAnswer);
export default play;
