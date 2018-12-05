import readlineSync from 'readline-sync';
import userName from './bin/brain-even';

const yes = 'yes';
const no = 'no';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const askQuestion = () => {
  const randomNum = getRandomInRange(1, 10);
  console.log(`Question: ${randomNum}`);
  return randomNum;
};

const askAnswer = () => {
  const request = readlineSync.question('Your answer: ');
  return request;
};
const checkParity = (question) => {
  if (question % 2 === 0) {
    return yes;
  }
  return no;
};

const check = () => {
  let correctAnswers = 0;
  for (let i = 0; i <= 3; i += 1) {
    if (correctAnswers === 3) {
      console.log(`Congratulation, ${userName}!`);
      return;
    }
    const question = askQuestion();
    const answer = askAnswer();
    const parity = checkParity(question);
    if (parity === answer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${parity}.`);
      return;
    }
  }
};

export default check;
