import readlineSync from 'readline-sync';
import defineEven from './games/defineEven';
import calculator from './games/calculator';

const run = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Select the game: 1. Define even; 2. Calculator;');
  const answer = readlineSync.question('Enter the game number: ');
  switch (answer) {
    case '1':
    case '1.': return defineEven();
    case '2':
    case '2.': return calculator();
    default: return console.log('Value not found. Start over.');
  }
};

export default run;
