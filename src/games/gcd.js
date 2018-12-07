import readlineSync from 'readline-sync';
import {
  greet, getRandomInRange, findGcd,
} from '../helpers';

const rightAnswersCount = 3;
const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const nameUser = greet();

  for (let iter = 0; iter < rightAnswersCount; iter += 1) {
    const firstQuestion = getRandomInRange(1, 30);
    const lastQuestion = getRandomInRange(1, 20);

    const rightAnswer = findGcd(firstQuestion, lastQuestion);
    console.log(`Question: ${firstQuestion} ${lastQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulation, ${nameUser}!`);
};

export default gcd;
