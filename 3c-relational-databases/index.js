/*
    0. Starter code - Modules
*/
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

const albumsRouter = require ('./route/albums/albumRouter');
const usersTouter = require('./routes/users/usersRouter');

/*
    0. Starter code - Database connection
*/
const connectToMongoDB = require("./database/mongodb");

/*
    0. Starter code - Middleware
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

/*
    4. Import and use the album router
*/
app.use('/api/albums', albumsRouter);
app.use('/api/users',userRouter);
/*
    8. Import and use the user router
*/
/*
    11. Context - Plug in the view router
*/

/*
    0. Starter code - Server start
*/
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}...`);

  connectToMongoDB();
});
