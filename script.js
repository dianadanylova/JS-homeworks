let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
let timeData = prompt( "Введите дату в формате YYYY-MM-DD", "");

let appData;
let expenses = {};
let optionalExpenses;
let income = [];
let savings = false;

appData = {money, timeData, expenses, optionalExpenses, income, savings};
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = prompt("Во сколько обойдется?", "");

expenses.answer1 = answer2;

alert(money / 30);



