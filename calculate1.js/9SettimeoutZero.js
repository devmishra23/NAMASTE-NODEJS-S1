console.log("hello world");

var a=12345;
var b=2342;

setTimeout(()=>{
    console.log("call me ASAP");
},3000);

function multiply(x,y){
    const result=a*b;
    return result;

}

var c=multiply(a,b);
console.log(c);