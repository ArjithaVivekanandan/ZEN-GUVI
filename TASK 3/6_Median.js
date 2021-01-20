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
let n = +userInput[0];
let ar1=userInput[1].split(" ").map(Number);
let ar2=userInput[2].split(" ").map(Number);

//ANONYMOUS FUNCTION

let anonymous_ans=function(ar1,ar2,n)
{
        let i=0,j=0,count,m1=-1,m2=-1;
        for (count = 0; count <= n; count++) 
        { 
            if (i == n) 
            { 
                m1 = m2; 
                m2 = ar2[0]; 
                break; 
            } 
      
            else if (j == n) 
            { 
                m1 = m2; 
                m2 = ar1[0]; 
                break; 
            } 
            
            if (ar1[i] <= ar2[j]) 
            {  
                
                m1 = m2;  
                m2 = ar1[i]; 
                i++; 
            } 
            else
            { 
               
                m1 = m2;  
                m2 = ar2[j]; 
                j++; 
            } 
        } 
      
        return (m1 + m2)/2; 
}
  
//IIFE

let iife_ans=(function()
{ 
    let i=0,j=0,count,m1=-1,m2=-1;
        for (count = 0; count <= n; count++) 
        { 
            if (i == n) 
            { 
                m1 = m2; 
                m2 = ar2[0]; 
                break; 
            } 
      
            else if (j == n) 
            { 
                m1 = m2; 
                m2 = ar1[0]; 
                break; 
            } 
            
            if (ar1[i] <= ar2[j]) 
            {  
                
                m1 = m2;  
                m2 = ar1[i]; 
                i++; 
            } 
            else
            { 
               
                m1 = m2;  
                m2 = ar2[j]; 
                j++; 
            } 
        } 
      
        return ((m1 + m2)/2);
   
}
)(ar1,ar2,n);

console.log(anonymous_ans(ar1,ar2,n));
console.log(iife_ans);
  //end-here
});

