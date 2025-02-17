// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// styles[1] = "classic";
// console.log(styles);

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//   const userLogin = prompt("Enter user login");
//   alert(
//     array.includes(userLogin) ? `Welcome, ${userLogin}!` : "User not found"
//   );
// }
// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const number of arguments) {
//     if (typeof number === "number") {
//       total += number;
//       count++;
//     }
//   }
//   return total === 0 ? 0 : total / count;
// }
// console.log(caclculateAverage(12, 13, 15));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function doubleNumber() {
//   let totalArr = [];
//   for (let i = 0; i < arguments.length - 1; i++) {
//     totalArr.push(arguments[i] + arguments[i + 1]);
//   }
//   return totalArr;
// }
// const result = doubleNumber(...someArr);
// console.log(result);

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = "array";
// function findSmallestNumber(numbers) {
//   return Array.isArray(numbers)
//     ? Math.min(...numbers)
//     : "Sory, it is not an array!";
// }
// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
