const express = require('express');
const mongoose = require('mongoose');
const  router = require("./routes/book-routes");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.json())//This will convert the data into JSON format so that our given data can be read by the server.
app.use(cors());
app.use("/books", router);

mongoose.connect("mongodb+srv://admin:OACY3KWpz4JeEHcE@cluster0.taseyg5.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected to Database"))
.then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
