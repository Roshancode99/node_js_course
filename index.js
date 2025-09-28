// const http = require("http");
// const fs = require("fs");

// const date = new Date();

// const myServer = http.createServer((req, res) =>{
//     console.log(req)
//     console.log("new request recieved");
//     const formatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ` + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
//     fs.appendFileSync("./test.log", formatted + "\n");
//     res.end("Hello From Server!")
// })

// myServer.listen(8000, () => {
//     console.log("🚀 Server is running on http://localhost:8000");
// });


const http = require("http");
const fs = require("fs");

function logRequest(req, includeHeaders = false) {
    const date = new Date();
    const timestamp = `${date.getDate().toString().padStart(2,'0')}-` +
                      `${(date.getMonth()+1).toString().padStart(2,'0')}-` +
                      `${date.getFullYear()} ` +
                      `${date.getHours().toString().padStart(2,'0')}:` +
                      `${date.getMinutes().toString().padStart(2,'0')}:` +
                      `${date.getSeconds().toString().padStart(2,'0')}:` +
                      `${date.getMilliseconds().toString().padStart(3,'0')}`;
    const clientIp = req.socket.remoteAddress || "unknown";
    let logEntry = `[${timestamp}] ${req.method} ${req.url} - Client IP: ${clientIp}`;
    if (includeHeaders) {
        logEntry += `\nHeaders: ${JSON.stringify(req.headers)}`;
    }
    console.log(logEntry);
    fs.appendFileSync("./server.log", logEntry + "\n");
}

const myServer = http.createServer((req, res) => {
    logRequest(req, false);
    switch(req.url) {
        case "/":
            res.end("Hello From Server!");
            break;
        case "/about":
            res.end("This is the About page");
            break;
        case "/contact":
            res.end("Contact us at contact@example.com");
            break;
        default:
            res.statusCode = 404;
            res.end("404 Not Found");
            break;
    }
});

myServer.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
