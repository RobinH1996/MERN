const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 2000,
  })
  .then(async () => {
    console.log("Connected to MongoDB Server");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const maxRequestBodySize = process.env.MAX_REQUEST_BODY_SIZE || "10mb";
app.use(express.json({ limit: maxRequestBodySize }));
app.use(express.urlencoded({ limit: maxRequestBodySize }));

// view engine setup

app.get("/*", (req, res, next) => {
  if (req.path.slice(-4) === ".map" && process.env.MODE === "production") {
    next(createError(404));
  }
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: process.env.FE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/user.routes.js");
app.use("/api/auth", userRoutes);

app.use(express.static("../FE/build"));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../FE/build/") });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.MODE === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
