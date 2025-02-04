// Завдання 1
// const number = Number(prompt("Enter number"));
// 1 варіант
// if (number === 10) {
//     alert("Вірно");
// } else {
//     alert("Невірно");
// }
// 2 варіант
// number === 10 ? alert("Вірно") : alert("Невірно");
// 3 варіант
// alert(number === 10 ? "Вірно" : "Невірно");
// console.log(number)


// Завдання 2
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//     alert(`${min} входить в другу чверть`);
// }else if (min <= 45) {
//     alert(`${min} входить в третю чверть`);
// }else if (min <= 59) {
//     alert(`${min} входить в четверту чверть`);
// }

// console.log(min)


// Завдання 3
// const num = prompt("Enter number for 1 to 4");
// let result = "";
// switch (num) {
//     case "1":
//         result = "зима";
//         break
//     case "2":
//         result = "весна";
//         break
//     case "3":
//         result = "літо";
//         break
//     case "4":
//         result = "осінь";
//         break
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result)

// Завдвання 4
// const inputMinutes = prompt("Enter minutes");

// const hours = String(Math.floor(inputMinutes / 60)).padStart(2, 0);
// const minutes = String(inputMinutes % 60).padStart(2, 0);

// console.log(`${hours}:${minutes}`)


// Завдання 5
// const userLogin = prompt("Enter user login").trim();
// console.log(userLogin);
// if (userLogin === "Адмін") {
//     const userPassword = prompt("Enter admin password");
//     if (userPassword === "Я головний") {
//         alert("Добрий день!");
//     } else {
//         alert("Невірний пароль");
//     }
// } else if(userLogin === "" || userLogin === null) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }


// Завдання 6
// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


// Завдання 7
// function getNumbers(min, max) {
//     let totalNumbers = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i);
//         if (i % 2 === 0) {
//             totalNumbers += i;
//         }
//     }
//     return totalNumbers;
// }
// console.log(getNumbers(1, 20));



// Завдання 8
// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Not a number!";
//     }
//     return Math.min(a, b);
// }

// console.log(min("3", 2))


// Завдання 9
// 1 вирішення
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         const checkAdult = confirm(`Are you adult?`);
//         return checkAdult;
//     }
// }
// 2 вирішення
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
// return const checkAdult = confirm(`Are you adult?`);
// }

// console.log(isAdult(17))


// Завдання 10
// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++){
//             if (num % 3 === 0 && num % 5 === 0) {
//             return "fizzbuzz";
//             } else if (num % 5 === 0) {
//             return "buzz";
//             } else if(num % 3 === 0) {
//             return "fizz";
//     }
//     }
// }
// console.log(fizzBuzz(20));