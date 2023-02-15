const express = require("express");
const path = require("path");
const router = express.Router();

const getRandNumber = require("../../core/utilities/random").getRandNumber;

router.get("/", (_, res) => {
  const number = getRandNumber(1, 8);

  return res.sendFile(
    path.join(`${__dirname}/../../public/capybara/bara${number}.png`)
  );
});

module.exports = router;
