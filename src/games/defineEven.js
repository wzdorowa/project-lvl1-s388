import { getRandomInRange } from '../helpers';
import engine from '../engine';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandomInRange(1, 10);

  const answer = (isEven(question)) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default() => engine(description, getGameData);
