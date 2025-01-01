let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const { v4: uuidv4 } = require("uuid");
var methodOverride = require("method-override");

let indexRouter = require("./routes/index");
let newRouter = require("./routes/new");
let detailsRouter = require("./routes/details");
let editRouter = require("./routes/edit");
let deleteRouter = require("./routes/delete");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/details", detailsRouter);
app.use("/edit", editRouter);
app.use("/delete", deleteRouter);

module.exports = posts = [
  {
    id: uuidv4(),

    username: "rakib",
    image:
      "https://cecilieo.com/content/images/wordpress/2024/03/reference_bird_2_cecilieo.jpg",
    caption: "This is a beautiful bird",
  },
  {
    id: uuidv4(),

    username: "Sabbir",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/b/l/Blue-jay-Matt-Williams.jpg?crop=0%2C11%2C4000%2C3000&wid=640&hei=480&scl=6.25",
    caption: "This is a beautiful bird",
  },
];
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
