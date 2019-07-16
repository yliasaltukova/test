'use strict';

var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
var firstVar= prompt("Во сколько обойдется?");
var secondQuestion = prompt("Введите обязательную статью расходов в этом месяце");
var secondVar = prompt("Во сколько обойдется?");


var appData = {
    moneyData: money,
    timeData: time,
    expenses: {
    
    },
    optionalExpenses: {},
    income :[],
    savings: false
};

appData.expenses[firstQuestion] = firstVar;
appData.expenses[secondQuestion] = secondVar;

alert (money/30);

