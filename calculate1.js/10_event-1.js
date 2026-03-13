const fs=require("fs");
const a=100;
 setImmediate(()=> console.log("set Immediate"));

 fs.readFile("./7file.txt","utf8",()=>{
    console.log("File read CB");
 });

 setTimeout(()=>console.log("timer expired"),0);

 function printA(){
    console.log("a=",a);
 }

 printA();
 console.log("last line of file is. ");