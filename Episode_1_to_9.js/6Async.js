const fs=require("fs");

const https=require("https");

console.log("hello world");

var a=1078698;
var b=20986;


//synchronous

// AVOID IT BECAUSE IT BLOCKING THE MAIN THREAD


// FS.READFILESYNC KRNE SE SYNCHRONOUS FUNCTION HO JAEGA YE MAIN THREAD KO BLOCK KR DEGA ISME V8 ENGINE ISS FILE KO LIBUV MEIN OFFLOAD NHI KREGA
// ISKO JYADA USE NHI KRTE KYUKI YHA PE AGR FILE READ KRNE MEIN 100 MS LG RHA TOH JS ENGINE 100MS KE BAAD HI AAGE MOVE HOGA

fs.readFileSync("./7file.txt","utf8");
console.log("This will execute only after file read")


https.get("https://dummyjson.com/products/1",(res)=>{  // YHA PE API FETCH HO RHA HAI..YE 100 SE 200 MS TIME LETA HAI
    console.log("Fetched data Successfully");

});



setTimeout(()=>{   // SET TIMEOUT CAN TAKE EXACT TIME WHAT IS BEEN GIVEN
    console.log("setTimeout called after 5 second");
},5000);

//  JB JB FS.READFILE HOGA YE APNE DATA KO LIBUV MEIN OFFLOAD KR DEGA YE EK ASYNC FUNCTION HOTA HAI

fs.readFile("./7file.txt","utf8", (err,data)=>{  // TAKES 5 TO 10 SEC0ND
    console.log("file Data :", data);
    });

 