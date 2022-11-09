const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const router = require("./routes/index");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//app.use('/api/v1', router);

router.router("/").get(bookController.getBook).post(bookController.addBook);

///////////////////////////////////////////

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Book repository API by Daberechi",
    documentation: "",
  });
});
app.get("/:id", (req, res) => {});

//unhandled routes
app.use("*", (req, res) => {
  return res.status(404).json({
    message: "Specified route does not exist on this server",
  });
});

module.exports = { app };
