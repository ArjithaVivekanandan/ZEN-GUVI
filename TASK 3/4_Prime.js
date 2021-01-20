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
let flag=false,flag1=false,arr=[],arr1=[],a;
    
//ANONYMOUS FUNCTION

let anonymous_ans=function(a)
{
    
    if(a>1)
    {
        flag=true;
        for(let j=2;j<=parseInt(a/2);j++)
        {
            if(a%j===0)
            
            {
                flag=false;
                break;
            }
        
        }
    }
    else
        flag=false;
return flag;
}

for(let i=0;i<y;i++)
{
    a=res[i];
    flag=anonymous_ans(a);
    if(flag)
    arr.push(res[i]);
    
}

//IIFE
for(let i=0;i<y;i++)
{
a=res[i];
let iife_ans=(function()
{ 
    if(a>1)
    {
        flag1=true;
        for(let j=2;j<=parseInt(a/2);j++)
        {
            if(a%j===0)
            
            {
                flag1=false;
                break;
            }
        
        }
    }
    else
        flag1=false;

return flag1;
}

)(a);

flag1=iife_ans;
    if(flag1)
    arr1.push(res[i]);
    
}


console.log(arr.join(" "));
console.log(arr1.join(" "));
  //end-here
});