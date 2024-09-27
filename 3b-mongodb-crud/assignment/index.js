
const express = require("express");
const logger = require("morgan");
const 
const connectToMongoDb = require('./database/mongodb');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use('/api', plansRouter);

const PORT = 3000
app.listen(PORT, () => {
    console.log(`The server is running on port:${PORT}`)
    connectToMongoDb();
})

