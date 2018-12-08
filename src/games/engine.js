import readlineSync from 'readline-sync';
import { greet } from '../helpers';

console.log('Welcome to the Brain Games!');
const rightAnswersCount = 3;

const engine = (description, getQuestion, getRightAnswer) => {
  console.log(description);
  const nameUser = greet();

  for (let iter = 0; iter < rightAnswersCount; iter += 1) {
    const question = getQuestion();
    const rightAnswer = getRightAnswer(question);

    console.log(`Question: ${question.value}`);
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
export default engine;
