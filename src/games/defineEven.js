import { getRandomInRange } from '../helpers';
import engine from '../engine';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => {
  const firstQuestion = getRandomInRange(1, 10);

  const question = {
    value: firstQuestion,
  };
  return question;
};

const getRightAnswer = question => ((isEven(question.value)) ? 'yes' : 'no');

const play = () => engine(description, getQuestion, getRightAnswer);
export default play;
