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
    savings: true,
    chooseExpenses : function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay); 
    },
    detectLevel: function() {

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
    },
    checkSavings: function() {
        let save, percent;
        if (appData.savings == true) {
            save = +prompt("Какова сумма накоплений?", "");
            percent = +prompt("Под какой процент?", "");
        }
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход?(Перечислите через запятую)", "");
        if (isNaN(items) && items != null && items != "") {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();  
        }
        let i = 1;
        appData.income.forEach(element => console.log(i + ": " + element), i++);
    }
};

for (const key in appData) {
    if (appData.hasOwnProperty(key)) {
        const element = appData[key];
        console.log(element);
    }
}





