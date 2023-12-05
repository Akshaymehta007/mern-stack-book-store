const express = require('express');
const mongoose = require('mongoose');
const  router = require("./routes/book-routes");
const cors = require('cors');
const app = express();
const path = require("path");
const BASE_URL = process.env.BASE_URL;


//Middleware
app.use(express.json())//This will convert the data into JSON format so that our given data can be read by the server.
app.use(cors());
app.use("/books", router);

const rootDir = path.resolve(__dirname);
const buildDir = path.join(rootDir, 'book-store', 'build');

app.use(express.static(buildDir));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

mongoose.connect("mongodb+srv://admin:OACY3KWpz4JeEHcE@cluster0.taseyg5.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected to Database"))
.then(() => {
    console.log("Connected to Database");
    app.listen(5000, 'localhost', () => {
      console.log(`Server is running at ${BASE_URL}`);
    });
  })
  .catch((err) => console.log(err));
