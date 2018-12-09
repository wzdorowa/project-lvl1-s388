import { getRandomInRange } from '../helpers';
import engine from '../engine';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const question = getRandomInRange(1, 100);

  const answer = (isPrime(question)) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default() => engine(description, getGameData);
