'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {
        c: "",
        d: "",
        e: ""
    },
    income :[],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        var a = prompt("Введите обязательную статью расходов в этом месяце");
        var b = prompt("Во сколько обойдется?");
    
        if (typeof(a)==='string' && (typeof(a)) !=null && (typeof(b)) !=null
            && a != '' && b != '' && a.length < 50 && b.length < 40) {
                console.log("done");
                appData.expenses[a]= b;
            } else {
                console.log ("Not done!");
            }
    }
}
chooseExpenses();

// расчет дневного бюджета
let budgetDay;
function detectDayBudget() {
    
    budgetDay = +prompt("Каков дневной бюджет?", "");

    alert(budgetDay/30);
}
detectDayBudget();

//расчет уровня достатка 
function detectLevel() {
    let level = +prompt("Расчет уровня достатка", "");
    alert(level);
}

detectLevel();




//статья необязательных расходов
let firstQuestion;
let secondQuestion;
let thirdQuestion;

function chooseOptExpenses () {
    
        firstQuestion = +prompt("Статья необязательных расходов?", "");
        secondQuestion = +prompt("Статья необязательных расходов?", "");
        thirdQuestion = +prompt("Статья необязательных расходов?", "");

        appData.optionalExpenses.c = (firstQuestion*30).toFixed();
        appData.optionalExpenses.d = (secondQuestion*30).toFixed();
        appData.optionalExpenses.e = (thirdQuestion*30).toFixed();
        alert("Ответ 1: " + appData.optionalExpenses.c);
        alert("Ответ 2: " + appData.optionalExpenses.d);
        alert("Ответ 3: " + appData.optionalExpenses.e);
    
}
chooseOptExpenses();

console.log(appData);



appData.moneyPerDay = (appData.moneyData / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);