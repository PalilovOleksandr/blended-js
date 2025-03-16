// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// // console.log(body);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// // console.log(title);
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listEl = document.querySelector(".list");
// // console.log(listEl);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataEl = document.querySelectorAll("li[data-topic]");
// // console.log(dataEl);
// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstDataEl = dataEl[0];
// // console.log(firstDataEl);
// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastDataEl = dataEl[dataEl.length - 1];
// // console.log(lastDataEl);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const mainTitle = document.querySelector("h1");
// const sibling = mainTitle.nextElementSibling;
// // console.log(sibling);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titles = document.querySelectorAll("h3");
// // console.log(titles);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір;
// // titles.forEach((title) => {
// //   title.classList.add("active");
// // });
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// // dataEl.forEach((item) => {
// //   if (item.dataset.topic === "navigation") {
// //     item.style.backgroundColor = "yellow";
// //     console.log(item);
// //     const textEl = item.querySelector("p");
// //     textEl.textContent = "Я змінив тут текст!";
// //   }
// // });
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// // const currentTopic = "manipulation";
// // dataEl.forEach((item) => {
// //   if (item.dataset.topic === currentTopic) {
// //     item.style.backgroundColor = "blue";
// //   }
// // });

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const titleEl = document.querySelector(".completed");
// // console.log(titleEl);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const parentEL = titleEl.closest("li");
// // parentEL.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement("p");
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// mainTitle.after(newText);
// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
// mainTitle.insertAdjacentHTML(
//   "afterend",
//   "<p>Об'єктна модель документа (Document Object Model)</p>"
// );
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newItem = document.createElement("li");
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// // 20 - очисти список
// listEl.innerHTML = "";

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const boxWrapper = document.querySelector(".numberContainer");
// const boxes = [];
// for (let i = 0; i <= 100; i++) {
//   const box = document.createElement("div");
//   box.classList.add("number");
//   box.textContent = randomNumber();
//   boxes.push(box);
//   if (box.textContent % 2 === 0) {
//     box.classList.add("even");
//   } else {
//     box.classList.add("odd");
//   }
// }
// boxWrapper.append(...boxes);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector(".js-username-input");

// input.addEventListener("input", () => {
//   if (input.value.length > 6) {
//     input.classList.remove("error");
//     input.classList.add("success");
//   } else {
//     input.classList.remove("success");
//     input.classList.add("error");
//   }
// });
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// input.addEventListener("focus", () => {
//   if (input.value.trim() === "") {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// });
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// input.addEventListener("blur", () => {
//   if (input.value.trim() === "") {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// });
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector(".js-contact-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.userName.value.trim();
  const checkbox = event.target.elements.accept.checked;
  if (inputValue === "" || !checkbox) {
    alert("fill all fields");
    return;
  }
  const data = {
    userName: inputValue,
  };
  console.log(data);
  form.reset();
}
