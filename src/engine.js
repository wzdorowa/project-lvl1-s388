import readlineSync from 'readline-sync';
import { greet } from './helpers';

console.log('Welcome to the Brain Games!');
const rightAnswersCount = 3;

const engine = (description, getGameData) => {
  console.log(description);
  const userName = greet();

  for (let iter = 0; iter < rightAnswersCount; iter += 1) {
    const { question, answer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};
export default engine;
