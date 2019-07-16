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
        firstQuestion: firstVar,
        secondQuestion: secondVar
    },
    optionalExpenses: {},
    income :[],
    savings: false
};

alert (money/30);

