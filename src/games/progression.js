import { getRandomInRange } from '../helpers';
import engine from '../engine';

const getProgressionMember = (startNum, step, length) => startNum + (step * (length - 0));

const generateProgression = (startNum, step, hiddenElementPosition, length) => {
  let progression = '';
  for (let i = 1; i <= length; i += 1) {
    if (i === hiddenElementPosition) {
      progression += '.. ';
    } else {
      progression += `${getProgressionMember(startNum, step, i)} `;
    }
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const startNum = getRandomInRange(1, 1000);
  const step = getRandomInRange(1, 20);
  const length = 10;
  const hiddenElementPosition = getRandomInRange(1, length);

  const question = generateProgression(startNum, step, hiddenElementPosition, length);

  const answer = String(getProgressionMember(startNum, step, hiddenElementPosition));

  return {
    question,
    answer,
  };
};
export default() => engine(description, getGameData);
