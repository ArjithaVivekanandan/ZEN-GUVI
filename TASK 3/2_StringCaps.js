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
let arr=[],arr1=[],s,s1="",s2="";
let firstascii,firstcaps;
    
//ANONYMOUS FUNCTION

let anonymous_ans=function(res)
{
    for(let j=0;j<res.length;j++)
    {
        s=res[j];s1="";
         firstascii=s[0].charCodeAt()-32;
         firstcaps=String.fromCharCode(firstascii);
        for(let i=1;i<s.length;i++)
        {
        s1+=s[i];
        }
         arr.push(firstcaps+s1);
    }
   
    return arr;

}
//IIFE

let iife_ans=(function()
{ 
    for(let j=0;j<res.length;j++)
    {
        s=res[j];s2="";
         firstascii=s[0].charCodeAt()-32;
         firstcaps=String.fromCharCode(firstascii);
        for(let i=1;i<s.length;i++)
        {
        s2+=s[i];
        }
         arr1.push(firstcaps+s2);
    }
   
    return arr1;

}
)(res);

console.log(anonymous_ans(res).join(" "));
console.log(iife_ans.join(" "));
  //end-here
});


  
  
 
 
