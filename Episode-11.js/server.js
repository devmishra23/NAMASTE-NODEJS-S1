 // JUST A SIMPLE CREATION OF SERVER

// const http=require("node:http");

// const server=http.createServer(
//     function(req,res){
//         res.end("Hello world");
//     }
// );
// server.listen(1818, () => {
//     console.log(`http://localhost:1818`);
// })


// Now, I want to handle different responses for the URL localhost:3000/getsecretdata

const http=require("http");
const server=http.createServer(
    function(req,res){
        if(req.url==="/getSecretData"){
            res.end("there is secret data");
        }
        else
        res.end("there is no secret data")
    }
);

server.listen(8000,()=>{
    console.log(`server is running at http://localhost:8000/getSecretData`)
});

//We use Express to create a server. Express is a framework built on top of Node.js that makes our lives easier.

