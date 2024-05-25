require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.port;
const router = require("./routes/routes");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req, res, next) =>{
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();
    
    if((day < 1 || day > 5) && (hours < 9 || hours > 17)){
        res.render("erreur", {title: "site indisponible"})
    }else{
        next();
    }
})
app.use(express.json());
app.use(router);


app.listen(port, ()=>console.log(`server running at http://localhost:${port}`))