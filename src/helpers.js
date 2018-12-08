import readlineSync from 'readline-sync';

export const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
