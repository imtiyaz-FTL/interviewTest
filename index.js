const http = require("http");

const server = http.createServer((req, res) => {
    // Check for the request method and URL
    if (req.method === 'GET' && req.url === '/get') {
        // Handle GET request to /get endpoint
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("hii from server");
    } else {
        // Handle other requests
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not Found");
    }
});

let port = 3000;

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
