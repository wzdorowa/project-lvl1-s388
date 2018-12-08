import readlineSync from 'readline-sync';
import { greet } from './helpers';

console.log('Welcome to the Brain Games!');
const rightAnswersCount = 3;

const engine = (description, getGameData) => {
  console.log(description);
  const nameUser = greet();

  for (let iter = 0; iter < rightAnswersCount; iter += 1) {
    const gameData = getGameData();
    console.log(`Question: ${gameData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(gameData.answer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gameData.answer}.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulation, ${nameUser}!`);
};
export default engine;
