const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    console.log(`${req.method} ${req.url}`);

    // Default page
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    // File extension
    const ext = path.extname(filePath);

    // Default content type
    let contentType = "text/html";

    switch (ext) {
        case ".css":
            contentType = "text/css";
            break;

        case ".js":
            contentType = "text/javascript";
            break;

        case ".png":
            contentType = "image/png";
            break;

        case ".jpg":
        case ".jpeg":
            contentType = "image/jpeg";
            break;

        case ".ico":
            contentType = "image/x-icon";
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {

        if (err) {

            if (err.code === "ENOENT") {

                // Custom 404 Page
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (error404, page404) => {

                        if (error404) {
                            res.writeHead(404, {
                                "Content-Type": "text/plain"
                            });

                            res.end("404 - Page Not Found");
                        } else {
                            res.writeHead(404, {
                                "Content-Type": "text/html"
                            });

                            res.end(page404);
                        }

                    }
                );

            } else {

                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("500 - Internal Server Error");

            }

        } else {

            res.writeHead(200, {
                "Content-Type": contentType
            });

            res.end(content);

        }

    });

});

const PORT = 3000;

server.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});