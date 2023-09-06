// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: "Anna",
//     profession: "IT",
//     showInfo: function (averageScore, missedLessons) {
//         console.group("Information about student:");
//         console.log(`name: ${this.name}`);
//         console.log(`profession: ${this.profession}`);
//         console.log(`average score: ${averageScore}`);
//         console.log(`missed lessons: ${missedLessons}`);
//         console.groupEnd();
//     },
// };

// const Nastya = {
//     name: "Nastya",
//     profession: "Marketing",
// };

// const Alex = {
//     name: "Alex",
//     profession: "Management",
// };

// const Olena = {
//     name: "Olena",
//     profession: "Philology",
// };

// student.showInfo.bind(Nastya, "B", "25")();
// student.showInfo.call(Alex, "E", "100");
// student.showInfo.apply(Olena, ["A", "0"]);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const wordDefinitions = {
//     showInfo() {
//         console.log(" - це", this.definition);
//     },
// };

// const HTML = {
//     definition: "стандартизована мова розмітки документів для перегляду веб-сторінок у браузері.",
// };

// const CSS = {
//     definition: "спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
// };

// document.querySelector("#html").addEventListener('click', wordDefinitions.showInfo.bind(HTML));
// document.querySelector("#css").addEventListener('click', wordDefinitions.showInfo.bind(CSS));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = {
//     showInfo() {
//         console.log('Ціна за', this.name, ":", (this.price * 10 * this.amount) / 10, "грн");
//     },
// };

// const banana = {
//     name: "banana",
//     price: 30,
//     amount: 4.5,
// }

// const cherry = {
//     name: "cherry",
//     price: 58,
//     amount: 1.3,
// }

// const orange = {
//     name: "orange",
//     price: 89,
//     amount: 3.4,
// }

// shop.showInfo.bind(banana)();
// shop.showInfo.call(cherry);
// shop.showInfo.apply(orange);