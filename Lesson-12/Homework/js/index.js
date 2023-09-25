// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

//Перший варіант:

// function printNumbers(from, to) {
//   let number = from;

//   const interval = setInterval(() => {
//     console.log(number);
//     number++;

//     if (number > to) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printNumbers(0, 15);

//Другий варіант:

// function printNumbers(from, to) {
//   function timeout(number) {
//     if (number <= to) {
//       console.log(number);
//       setTimeout(() => {
//         timeout(number + 1);
//       }, 1000);
//     }
//   }

//   timeout(from);
// }

// printNumbers(0, 5);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:

// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));