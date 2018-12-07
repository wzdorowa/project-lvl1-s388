import readlineSync from 'readline-sync';

export const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = num => num % 2 === 0;

export const getRandomOperationSign = () => {
  const randomSign = getRandomInRange(1, 3);
  switch (randomSign) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return console.log('Unknown value');
  }
};

export const applyOperation = (sign, firstNum, lastNum) => {
  switch (sign) {
    case '+': return firstNum + lastNum;
    case '-': return firstNum - lastNum;
    case '*': return firstNum * lastNum;
    default: return console.log('Unknown value');
  }
};
