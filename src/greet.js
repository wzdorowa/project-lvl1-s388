import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ');

const greet = () => {
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greet;
