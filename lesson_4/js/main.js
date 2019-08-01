'use strict';

let money, time;
let budgetDay;
let firstQuestion;
let secondQuestion;
let thirdQuestion;

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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце");
            var b = prompt("Во сколько обойдется?");
        
            if (typeof(a)==='string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50 && b.length < 40) {
                    console.log("done");
                    appData.expenses[a]= b;
                } else {
                    console.log ("Not done!");
                }
        }
    },
    detectDayBudget: function() {
        budgetDay = +prompt("Каков дневной бюджет?", "");

        alert(budgetDay/30);
    },
    detectLevel: function() {
        let level = +prompt("Расчет уровня достатка", "");
        alert(level);
    },
    chooseOptExpenses: function() {
        firstQuestion = +prompt("Статья необязательных расходов?", "");
        secondQuestion = +prompt("Статья необязательных расходов?", "");
        thirdQuestion = +prompt("Статья необязательных расходов?", "");

        appData.optionalExpenses.c = (firstQuestion*30).toFixed();
        appData.optionalExpenses.d = (secondQuestion*30).toFixed();
        appData.optionalExpenses.e = (thirdQuestion*30).toFixed();
        alert("Ответ 1: " + appData.optionalExpenses.c);
        alert("Ответ 2: " + appData.optionalExpenses.d);
        alert("Ответ 3: " + appData.optionalExpenses.e);
    },
    chooseIncome: function() {
        let items = prompt("Что принесет доп. доход?", '');

        if((typeof(items)) === 'string' && items != '' && (typeof (items)) !=null) {
            appData.income =items.split(', ');
            appData.income.forEach(function(item, i, income){
            alert('Способ доп.заработка: ' + item);
            });
        } else {
            alert("Not done!");
        }
        
    }
};


appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.chooseOptExpenses();
appData.chooseIncome();

appData.moneyPerDay = (appData.moneyData / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
}