var sum = 0;
for (var i =1;i<=10;i++){
let readlineSync = require("readline-sync");
var number = readlineSync.questionInt("enter your number :- ")
sum= sum+number
};
console.log(sum)