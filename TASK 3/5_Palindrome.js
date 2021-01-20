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
let res=userInput[1].split(" ");
let arr=[],arr1=[];
    
//ANONYMOUS FUNCTION

let anonymous_ans=function(res)
{
    for(let i=0;i<y;i++)
    {
            if(res[i]==(res[i].split("").reverse().join("")))
            arr.push(res[i]);
    }
    return arr;

}
//IIFE

let iife_ans=(function()
{ 
    for(let i=0;i<y;i++)
    {
            if(res[i]==(res[i].split("").reverse().join("")))
            arr1.push(res[i]);
    }
    return arr1;
}
)(res);

console.log(anonymous_ans(res).join(" "));
console.log(iife_ans.join(" "));
  //end-here
});

