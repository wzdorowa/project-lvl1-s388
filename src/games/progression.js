import { getRandomInRange } from '../helpers';
import engine from '../engine';

const getProgressionMember = (startNum, step, n) => startNum + (step * (n - 1));

const generateProgression = (startNum, step, hidden, n) => {
  let progression = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === hidden) {
      progression += '.. ';
    } else {
      progression += `${getProgressionMember(startNum, step, i)} `;
    }
  }
  return progression;
};

export const description = 'What number is missing in the progression?';

export const getGameData = () => {
  const startNum = getRandomInRange(1, 1000);
  const step = getRandomInRange(1, 20);
  const n = 10;
  const hidden = getRandomInRange(1, n);

  const question = generateProgression(startNum, step, hidden, n);

  const answer = getProgressionMember(startNum, step, hidden);

  return {
    question,
    answer,
  };
};
export default() => engine(description, getGameData);
