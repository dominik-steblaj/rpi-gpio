const GPIO = require("onoff").Gpio;
const rele = new GPIO(7, "out");

exports.default = (req, res) => {
  res.render("on-off");
};

exports.rele = (req, res) => {
  console.log(req.params.stanje);
  if (req.params.stanje === "ON") {
    rele.writeSync(1);
    console.log("RELE: ON");
  }
  if (req.params.stanje === "OFF") {
    rele.writeSync(0);
    console.log("RELE: OFF");
  }
  res.send({ stanje: req.params.stanje });
};
