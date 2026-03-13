const fs=require("fs");

const a=100;

setImmediate(()=> console.log("setImmediate"));

Promise.resolve(()=> console.log("promise"));

fs.readFile("./7file.txt","utf8",()=>{
    console.log("file Reading CB")
});

setTimeout(()=>console.log("timer expired"),0);

process.nextTick(()=>console.log("process.nextTick"));

function printA(){
    console.log("a "+ a);
};
printA();

console.log("last line of the file");