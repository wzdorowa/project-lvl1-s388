import readlineSync from 'readline-sync';
import greet from './greet';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = num => num % 2 === 0;

const check = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const nameUser = greet();
  const cyclesCount = 3;
  
  for (let iter = 0; iter < cyclesCount; iter += 1) {
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

export default check;
