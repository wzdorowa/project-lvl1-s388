#!/usr/bin/env node
import { greet, check } from '../index';


console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = greet();

check();

export default userName;
