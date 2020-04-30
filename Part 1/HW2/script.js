let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt( "Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
    };


for (let i = 0; i <= 1; i++) {
    let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let answer2 = prompt("Во сколько обойдется?", "");

    if ((typeof(answer1) === "string") && (typeof(answer1) != null) && (typeof(answer2) != null) && (answer1 != '') && (answer2 != '') && (answer1.length < 50)) {
            appData.expenses[answer1] = answer2;
        }
        else {
            i--;
        }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
}
else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 2000)) {
	console.log("Средний уровень достатка");
}
else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
}
else {
	console.log("Произошла ошибка");
}




