var readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter your number");
var fac=1;
while (num>0){
    fac=fac*num
    num--
}
console.log("factorial","=",fac)
