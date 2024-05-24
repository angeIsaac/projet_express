require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.port;
const router = require("./routes/routes");

app.use(express.json());
app.use(router);


app.listen(port, ()=>console.log(`server running at localhost:${port}`))