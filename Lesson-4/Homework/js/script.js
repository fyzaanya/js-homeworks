// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(15));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         if (a == b) {
//             confirm('Числа однакові');
//         } else {
//             return b;
//         }
//     }
// }

// console.log(min(4, 8));
// console.log(min(10, 8));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask("Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, showOk, showCancel) => {
//     confirm(question) ? showOk() : showCancel();
// }

// ask('Ви згодні?',
//     () => alert('Ви погодились.'),
//     () => { alert('Ви скасували виконання.'); }
// );

// Або інший варіант:

// const ask = (question, yes, no) => {
//     confirm(question) ? yes() : no();
// }

// ask('Ви згодні?',
//     showOk = () => alert('Ви погодились.'),
//     showCancel = () => { alert('Ви скасували виконання.'); }
// );