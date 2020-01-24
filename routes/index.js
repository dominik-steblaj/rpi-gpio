const express = require("express");
const router = express.Router();

//controllerji
const defaultController = require("../controllers/defaultController");

router.get("/", defaultController.default);
router.get("/rele/:stanje", defaultController.rele);

module.exports = router;
