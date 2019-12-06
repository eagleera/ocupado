var express = require("express");
var router = express.Router();
const Bathroom = require("../models/bathroomModel");

/* GET home page. */
router.get("/:id", async function(req, res, next) {
  try {
    let bathroom = await Bathroom.findById(req.params.id);
    res.render("index", { bathroom: bathroom });
  } catch (error) {
  }
  
});

router.post("/bathroom", async function(req, res) {
  const bathroom = new Bathroom(req.body);
  await bathroom.save();
  res.status(200).json(bathroom);
});

router.post("/:id/:status", async function(req, res, next) {
  try {
    let bathroom = await Bathroom.findById(req.params.id);
    bathroom.status = req.params.status;
    await bathroom.save();
    res.status(200).json(bathroom);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
