const fs=require("fs");

const https=require("https");

console.log("hello world");

var a=1078698;
var b=20986;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fetched data Successfully");

});

setTimeout(()=>{
    console.log("setTimeout called after 5 second");
},5000);

fs.readFile("./7file.txt","utf8", (err,data)=>{
    console.log("file Data :", data);
    });