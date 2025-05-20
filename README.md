# My Todo-list Application

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## Опис проекту

Це простий додаток «Список справ» (Todo-list), розроблений у рамках тестового завдання. Він дозволяє користувачам додавати, переглядати, позначати як виконані та видаляти завдання. Проект складається з двох частин: клієнтської частини (фронтенд) на React і серверної частини (бекенд) на Express.js.

## Використані технології

* **Фронтенд:**
    * [React](https://react.dev/) - Бібліотека JavaScript для створення користувацьких інтерфейсів.
    * [TypeScript](https://www.typescriptlang.org/) - Типізована надмножина JavaScript, що забезпечує кращу масштабованість і налагодження.
    * [Redux Toolkit](https://redux-toolkit.js.org/) - Офіційно рекомендований набір інструментів для ефективної розробки Redux.
    * [Tailwind CSS](https://tailwindcss.com/) - Утилітарний CSS-фреймворк для швидкого створення користувацьких інтерфейсів.
    * [Vite](https://vitejs.dev/) - Інструмент збірки нового покоління для фронтенд-розробки.
* **Бэкенд:**
    * [Express.js](https://expressjs.com/) - Швидкий, негнучкий, мінімалістичний веб-фреймворк для Node.js.
    * [Node.js](https://nodejs.org/) - Середовище виконання JavaScript, побудоване на движку V8.

## Можливості

* Додавання нових завдань.
* Позначка завдань як виконаних/невиконаних.
* Видалення завдань.

## Встановлення та запуск

Для запуску проекту на вашій локальній машині виконайте такі кроки:

### 1. Клонування репозиторію

```bash
git clone https://github.com/NikolasKat/true-item-todo-list
cd todo-list
cd server

npm run server <--- "if you want to start run server" --->
npm run client <--- "if you want to start run client" --->
npm run start  <--- "if you want to start run client and server at the same time" --->
