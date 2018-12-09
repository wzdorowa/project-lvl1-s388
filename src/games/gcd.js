import { getRandomInRange } from '../helpers';
import engine from '../engine';

export const findGcd = (a, b) => {
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstQuestion = getRandomInRange(1, 30);
  const lastQuestion = getRandomInRange(1, 20);

  const question = `${firstQuestion} ${lastQuestion}`;

  const answer = String(findGcd(firstQuestion, lastQuestion));

  return {
    question,
    answer,
  };
};
export default() => engine(description, getGameData);
