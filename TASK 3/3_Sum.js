// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let y = +userInput[0];
let res=userInput[1].split(" ").map(Number);
let sum=0,sum1=0;
    
//ANONYMOUS FUNCTION

let anonymous_ans=function()
{
    for(let i=0;i<y;i++)
{
            sum=(sum+res[i]);
}
return sum;
}


//IIFE

let iife_ans=(function()
{ 
    for(let i=0;i<y;i++)
{
            sum1=(sum1+res[i]);
}
return sum1;
}
)();

console.log(anonymous_ans());
console.log(sum1);
  //end-here
});

