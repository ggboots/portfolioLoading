// Built in feature

// const http = require("http");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.write("This is home page.");
//         res.end();
//     } else {
//         res.write("not found");
//         res.end();
//     }
// });

// server.listen(PORT);

// console.log(`server is running on port: ${PORT}`);


// express - framework nodejs

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('dist'))

app.listen(3000)
