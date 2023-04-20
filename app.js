const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Routes
const authRoutes = require("./routes/auth");
const curdRoutes = require("./routes/db");


app.use(bodyParser.json());

// Routes
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", curdRoutes);

// PORT
const port = 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
