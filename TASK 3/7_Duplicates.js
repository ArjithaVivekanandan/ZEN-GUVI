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

let anonymous_ans=function(a)
{
    for(let i=0;i<y;i++)
    {    
        s=a[i];
    for(let j=i+1;j<y;j++)
    {
        if(s==a[j])
        {
            a[j]=" ";
        }
    }
   
    }
   for(let i=0;i<y;i++)
    {
      if(a[i]!=" ")
      {
          arr.push(a[i]);
      }
      
    }
   
    return arr;

}
//IIFE

let iife_ans=(function()
{ 
    for(let i=0;i<y;i++)
    {    
        s=res[i];
    for(let j=i+1;j<y;j++)
    {
        if(s==res[j])
        {
            res[j]=" ";
        }
    }
    
    }
   for(let i=0;i<y;i++)
    {
      if(res[i]!=" ")
      {
          arr1.push(res[i]);
      }
     
    }
   
    return arr1;

}
)(res);

console.log(anonymous_ans(res).join(" "));
console.log(iife_ans.join(" "));
  //end-here
});

