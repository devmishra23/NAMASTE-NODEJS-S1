🧠 1. WHAT IS A CLIENT?
👉 Definition:

A client is a system or application that requests services/data from a server.

✔ Examples:

Web browser (Chrome)
Mobile apps (Instagram)
Postman (API testing)

✔ Role:

Sends request
Displays response

⚙️ 2. WHAT IS A SERVER?
👉 Definition:

A server is a system that receives requests, processes them, and sends back responses.

✔ Role:

Handles requests
Runs logic
Fetches data

---->> WHAT IS HTTP SERVER
IS is a rule or protocols  in which file will send to client


Q: Can I create multiple servers?

A : Yes, you can create multiple HTTP servers.

Now, suppose a user is sending a request. How do we know which server it should go to?

When I mention creating an HTTP server, it means we are setting up two different Node.js applications. The distinction between these servers is defined by a port, which is a 4-digit number (e.g., port 3000).

For example, suppose an HTTP server with IP address 102.209.1.3is running on port 3000 . This combination of IP address and port number (102.209.1.3:3000 ) indicates which specific HTTP server the request should be routed to.

Essentially, this means thereʼs a single computer (the server) that can run multiple applications, each with its internal servers. The port number determines which application or server the request is directed to.

--------------------------------------------------------

🔥 Q: What is a Module in Node.js?

👉 A module in Node.js is a reusable block of code that is encapsulated and can be imported into other files.

🧠 1. WHY MODULES ARE NEEDED?
❓ Problem:

Large code becomes messy ❌

Difficult to maintain

👉 Solution:

Break code into small reusable modules.

⚙️ TYPES OF MODULES IN NODE.JS


🔹 1. Core Modules (Built-in)

👉 Provided by Node.js

✔ Examples:

http → create server

fs → file system

path → file paths

✔ Example:

const http = require("http");


🔹 2. Local Modules (Custom)---->>>>>

👉 Created by you

✔ Example:

📄 math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
📄 app.js
const add = require("./math");
console.log(add(2, 3));


🔹 3. Third-Party Modules--->>>>>

👉 Installed using npm

✔ Examples:

express
lodash

✔ Install: npm install express
