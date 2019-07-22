'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income :[],
    savings: false
};

/*for (let i = 0; i < 2; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");

    if (typeof(a)==='string' && (typeof(a)) !=null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50 && b.length < 40) {
            console.log("done");
            appData.expenses[a]= b;
        } else {
            console.log ("Not done!");
        }
    
};*/



/*let i = 0;
while (i < 2) {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");
    i++;

    appData.expenses[a]= b;
    console.log ("done");
}*/

let i = 0;
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");
    i++;
    appData.expenses[a]= b;
    console.log ("good");
} while (i < 2);


alert (appData.moneyData/30);

console.log(appData);
