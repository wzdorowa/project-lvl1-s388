import readlineSync from 'readline-sync';
import greet from './greet';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = randomNum => ((randomNum % 2 === 0) ? 'yes' : 'no');

const check = () => {
  const nameUser = greet();

  for (let i = 0; i < 3; i += 1) {

    const randomNum = getRandomInRange(1, 10);
    const rightAnswer = isEven(randomNum);
    console.log(`Question: ${randomNum}`);
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
