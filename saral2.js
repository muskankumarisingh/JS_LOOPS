/*var n=require("readline-sync");
const num=n.question("enter number: ");
let i=1
var count=0;
while (i<=num) {
       if (num%i==0) {
       count=count+1
       }
       i++;
}
if (count==2) {
       console.log("prime number")
}
else {
   console.log("not prime number")
}*/


/*var n=require("readline-sync");
const num=n.question("enter the number :");
var count=0;
for(var i=0;i<=num;i++){
       if(num%i==0){
              count=count+1
       }
}
if (count==2){
       console.log("prime number")
}
else{
       console.log("not prime number")
}*/


var readlinesync=require("readline-sync");
const num=readlinesync.question("enter the number :");
var i=0;
var count=0;
do{
       if(num%i==0){
              count=count+1
       }
       i++
}
while(i<=num)
if(count==2){
       console.log("prime number")
}
else{
       console.log("not prime number")
}









