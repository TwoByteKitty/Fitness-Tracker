const express = require("express");
const router = express.Router();

router.get(["/", "/create"], (req, res) => {




    res.render("create");
});


router.get("/choose", (req, res) => {




    res.render("choose");
});


router.get("/track", (req, res) => {




    res.render("track");
});


module.exports = router;