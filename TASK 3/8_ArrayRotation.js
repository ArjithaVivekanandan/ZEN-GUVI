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

let y =userInput[0].split(" ").map(Number);
let str=userInput[1].split(" ").map(Number);
let l=y[1];
let count=0,res=[],res1=[];

if(l>y[0])
{
    l=l%y[0];
}

//ANONYMOUS FUNCTION

let anonymous_ans=function(str,l)
{
for( i=l;i<y[0];i++)
res.push(str[i]);

for(let i=0;count<l;i++)
{
    res.push(str[i]);
    count++;
    
}
return res.join(" ");
}
console.log(anonymous_ans(str,l));

//IIFE
count=0;
var iife_ans=(function(){
for( i=l;i<y[0];i++)
res1.push(str[i]);
for(let i=0;count<l;i++)
{
    res1.push(str[i]);
    count++;
    
}
return res1.join(" ");
})(str,l);

console.log(iife_ans);




  //end-here
});