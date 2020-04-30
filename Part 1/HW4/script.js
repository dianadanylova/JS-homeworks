let money,
    time;

function start() {
    money = prompt("Ваш бюджет на месяц?", "");
    time = prompt( "Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
    };


function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay); 
}

detectDayBudget();

function detectLevel() {

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
}

detectLevel();

function checkSavings() {
    let save, percent;
    if (appData.savings == true) {
        save = +prompt("Какова сумма накоплений?", "");
        percent = +prompt("Под какой процент?", "");
    }
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        optionalExpenses: {
            i: prompt("Статья необязательных расходов?", "");
        }
    }
}

