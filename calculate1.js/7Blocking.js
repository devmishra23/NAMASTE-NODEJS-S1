const crypto=require("node:crypto"); // CRYPTO IS BASICALLY NODE JS CORE MODULE
console.log("Hello world");


var a=102345;
var b=12343;


// PBKDF2---> PASSWORD BASE KEY DERAVTIVE FUNCTION

//  SYNCHRONOUS FUNCTION WILL BLOCK THE MAIN THREAD -->> DONT DO THIS

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First key is Generated");


// ASYNC FUNCTION 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
console.log("second key is Generated");
});
 

function multiplyfn(x,y){
    const result=a*b;
    return result;
}

var c=multiplyfn(a,b);
console.log("Multiplication result is: ",c )