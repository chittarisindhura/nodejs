const express = require("express");
const session = require("express-session");
const connectDatabase = require("./config/db");
const PassportAuth = require("./config/passportConfig");
const passport = require("passport");
const cors = require("cors");
const port = 5001;
const app = express();
app.use(express.json());
connectDatabase();
PassportAuth();

app.use(cors({ origin: "https://courageous-bombolone-5a67b9.netlify.app" }));

app.use(express.json());
app.use(
  session({
    secret: "batman",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/gettasks", require("./routes/getTasks"));
app.use("/addtask", require("./routes/addTask"));
app.use("/update", require("./routes/updateTask"));
app.use("/delete", require("./routes/deleteTask"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started successfully on port ${port}`);
});
