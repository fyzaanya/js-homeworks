// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// (1 > 0) ? console.log(true) : console.log(false);

// (0 > 0) ? console.log(true) : console.log(false);

// (-3 > 0) ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// switch ('true') {
//     case 'test':
//         console.log(true);
//         break;
    
//     case 'qwerty':
//         console.log(true);
//         break;
    
//     case 'true':
//         console.log(true);
//         break;
    
//     default: console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const a = parseInt(prompt('Введіть число'));
// if (a > 10) {
//     console.log(a - 5);
// } else if (a <= 10) {
//     console.log(a + 5);
// } else {
//     console.log("ERROR");
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt('Введіть цифру місяця');
// switch (month) {
//     case ('1'):
//         alert(month + ' місяць це Січень');
//         break;
    
//     case ('2'):
//         alert(month + ' місяць це Лютий');
//         break;
    
//     case ('3'):
//         alert(month + ' місяць це Березень');
//         break;
    
//     case ('4'):
//         alert(month + ' місяць це Квітень');
//         break;
    
//     case ('5'):
//         alert(month + ' місяць це Травень');
//         break;
    
//     case ('6'):
//         alert(month + ' місяць це Червень');
//         break;
    
//     case ('7'):
//         alert(month + ' місяць це Липень');
//         break;
    
//     case ('8'):
//         alert(month + ' місяць це Серпень');
//         break;
    
//     case ('9'):
//         alert(month + ' місяць це Вересень');
//         break;
    
//     case ('10'):
//         alert(month + ' місяць це Жовтень');
//         break;
    
//     case ('11'):
//         alert(month + ' місяць це Листопад');
//         break;
    
//     case ('12'):
//         alert({month} + ' місяць це Грудень');
//         break;
    
//     default: alert('Немає такого місяця в році');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num >= 100) {
//     let a = Math.floor(num / 100);
//     let b = Math.floor((num % 100) / 10);
//     let c = Math.floor(num % 10);
//     let sum = a + b + c;
//     alert('Сума цифр числа ' + num + ' дорівнює = ' + sum);
// } else {
//     alert('Це не трьохзначне число');
// }