import { name } from './module';
import './styles.css';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import toDate from 'validator/lib/toDate';

console.log("My name is " + name);

console.log(isEmail('foo@bar.com'));
console.log(isURL('figma.com'));
console.log(toDate('12.12.2001'));

var moment = require('moment');
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));