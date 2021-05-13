const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");

const app = express();
env.config();

app.use(cors());
app.options("*", cors());

// database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: "iFound",
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

// routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");

app.use("/api/index", indexRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started @ ${PORT}`);
});
