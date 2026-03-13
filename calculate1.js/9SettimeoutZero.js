console.log("hello world");

var a=12345;
var b=2342;


// THIS FUNCTION IS ONLY PUSHED TO CALL STACK IF ONCE CALL STACK IS EMPTY....

setTimeout(()=>{  // OFFLOADED TO LIBUV FOR 3 SECOND
    console.log("call me ASAP");
},3000);

function multiply(x,y){
    const result=a*b;
    return result;

}

var c=multiply(a,b);
console.log(c);

// javascript is a jit language means just in time 