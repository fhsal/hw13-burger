var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// route to retrieve all burgers

router.get("/", function (req, res) {
  burger.selectAll("burgers", function (data) {
    var burgerDataObj = {
      burgers: data,
    };
    console.log(burgerDataObj);
    res.render("index", burgerDataObj);
  });
});

// route to add a burger

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", [req.body.burger], function (err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

// route to change the devoured status of a burger

router.put("/api/burgers/:id", function (req, res) {
  var selected = "id = " + req.params.id;
  console.log("selected", selected);
  burger.updateOne(
    { devoured: req.body.devoured },
    selected,
    function (result) {
      res.end();
    }
  );
});

module.exports = router;
