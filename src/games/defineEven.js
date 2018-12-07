import readlineSync from 'readline-sync';
import { greet, getRandomInRange, isEven } from '../helpers';

const rightAnswersCount = 3;
const defineEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');

  const nameUser = greet();
  for (let iter = 0; iter < rightAnswersCount; iter += 1) {
    const question = getRandomInRange(1, 10);
    const rightAnswer = (isEven(question)) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulation, ${nameUser}!`);
};

export default defineEven;
