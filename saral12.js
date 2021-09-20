var sum = 0;
for (var i =50;i>40;i--){
let readlineSync = require("readline-sync");
var number = readlineSync.questionInt("enter your number :- ")
sum= sum+number
};
console.log(sum)