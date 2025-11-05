// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// function logRequest(req, includeHeaders = false) {
//     const date = new Date();
//     const timestamp = `${date.getDate().toString().padStart(2,'0')}-` +
//                       `${(date.getMonth()+1).toString().padStart(2,'0')}-` +
//                       `${date.getFullYear()} ` +
//                       `${date.getHours().toString().padStart(2,'0')}:` +
//                       `${date.getMinutes().toString().padStart(2,'0')}:` +
//                       `${date.getSeconds().toString().padStart(2,'0')}:` +
//                       `${date.getMilliseconds().toString().padStart(3,'0')}`;
//     const clientIp = req.socket.remoteAddress || "unknown";
//     let logEntry = `[${timestamp}] ${req.method} ${req.url} - Client IP: ${clientIp}`;
//     if (includeHeaders) {
//         logEntry += `\nHeaders: ${JSON.stringify(req.headers)}`;
//     }
//     console.log(logEntry);
//     fs.appendFileSync("./server.log", logEntry + "\n");
// }

// const myServer = http.createServer((req, res) => {
//     logRequest(req, false);

//     const myUrl = url.parse(req.url , true);
//     console.log(myUrl)
//     switch(myUrl.pathname) {
//         case "/":
//             res.end("Hello From Server!");
//             break;
//         case "/about":
//             res.end("This is the About page");
//             break;
//         case "/contact":
//             res.end(`Contact us at contact@example.com, query param name : ${JSON.stringify(myUrl.query)} , userid : ${myUrl.query.userid}`);
//             break;
//         default:
//             res.statusCode = 404;
//             res.end("404 Not Found");
//             break;
//     }
// });

// myServer.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });


const express = require('express')
const url = require('url');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('this is about page!')
})

app.get('/contact', (req, res) => {
  res.send('this is contact page!')
})

app.get('/check', (req, res) => {
  const name = req.query.name;
  const type = req.query.type;

  if (name && type) {
    res.send(`Hey ${name}! You seem to be interested in the ${type} category — nice choice! 😎`);
  } else if (name) {
    res.send(`Hi ${name}! You forgot to tell me your type — don’t leave me guessing!`);
  } else {
    res.send('Hello mysterious visitor! Try adding ?name=YourName&type=YourType to the URL.');
  }
});

// /check?name=Alice&type=music

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
})
