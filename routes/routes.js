const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index", {title: "Accueil"});
});
router.get("/contact", (req, res) =>{
    res.render("../views/pages/contact", {title: "contact"});
});
router.get("/service", (req, res) =>{
    res.render("../views/pages/services", {title: "Nos service"});
})


module.exports = router;