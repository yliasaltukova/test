'use strict';

var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var ourCost = prompt("Введите обязательную статью расходов в этом месяце");
var ourMoney = prompt("Во сколько обойдется?");
var ourCost = prompt("Введите обязательную статью расходов в этом месяце");
var ourMoney = prompt("Во сколько обойдется?");



var appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        "1689" : "34000"
    },
    optionalExpenses: {},
    income :[],
    savings: false
};

console.log(appData.expenses);
console.log(money/30);

