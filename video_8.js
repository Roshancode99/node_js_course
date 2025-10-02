const http = require("http");
const fs = require("fs");
const url = require("url");

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

    const myUrl = url.parse(req.url , true);
    console.log(myUrl)
    switch(myUrl.pathname) {
        case "/":
            res.end("Hello From Server!");
            break;
        case "/about":
            res.end("This is the About page");
            break;
        case "/contact":
            res.end(`Contact us at contact@example.com, query param name : ${JSON.stringify(myUrl.query)} , userid : ${myUrl.query.userid}`);
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


/**
 * The 'url' module is a built-in Node.js module used to parse URLs.
 * Using url.parse(req.url, true) converts the request URL into an object
 * with pathname and query parameters.
 *
 * JSON.stringify is used here to convert the query object into a JSON string
 * so it can be safely printed or sent in a response. Without it, embedding
 * an object directly in a string template would cause errors.
 */
