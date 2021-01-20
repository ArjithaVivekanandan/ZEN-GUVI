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
let arr=[],arr1=[],a;
    
//ANONYMOUS FUNCTION

let anonymous_ans=function(a)
{
        if(a%2!==0)
        return a;
}

for(let i=0;i<y;i++)
{
    a=res[i];
    arr.push(anonymous_ans(a));
    
}

//IIFE
for(let i=0;i<y;i++)
{
a=res[i];
let iife_ans=(function()
{ 
    if(a%2!==0)
        return a;
}
)(a);

    arr1.push(iife_ans);
}


console.log(arr.join(" "));
console.log(arr1.join(" "));
  //end-here
});

