const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://jacobulug0058:ns9FK755Yuxte78E@cluster0.76owu.mongodb.net/Reja";


mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,
    }, (err, client) => {
        if(err) console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 4002;
            server.listen(PORT, function() {
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
            });   
        }
    });
