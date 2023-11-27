// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// function checkNumber(number) {
//     if (number > 0) {
//         return console.log(true);
//     } else console.log(false);
// }
//
// checkNumber(1);
// checkNumber(0);
// checkNumber(-3);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// function checkString(variable) {
//     if (variable === "test") {
//         return console.log(true);
//     } else {
//         return console.log(false)
//     }
// }
//
// checkString('test');
// checkString("qwerty");
// checkString(true);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// function modifyNumber(number) {
//     if (number > 10) {
//         return console.log(number - 5);
//     } else {
//         return console.log(number + 5);
//     }
// }
//
// modifyNumber(1);
// modifyNumber(10);
// modifyNumber(13);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// function getMonthName(number) {
//     switch (number) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//         default:
//             console.log("Wrong number of month");
//     }
// }
//
// getMonthName(1);
// getMonthName(2);
// getMonthName(3);
// getMonthName(4);
// getMonthName(5);
// getMonthName(6);
// getMonthName(7);
// getMonthName(8);
// getMonthName(9);
// getMonthName(10);
// getMonthName(11);
// getMonthName(12);
// getMonthName(13);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// function sumOfDigits(number) {
//     if (number >= 100 && number <= 999) {
//         const number1 = Math.floor(number / 100);
//         const number2 = (Math.floor(number % 100) / 10);
//         const number3 = number % 10;
//         const sum=  Math.floor(number1 + number2 + number3);
//         return console.log(sum);
//     } else {
//         return "Please give three numbers";
//     }
// }
//
// sumOfDigits(123);
// sumOfDigits(654);
// sumOfDigits(111);