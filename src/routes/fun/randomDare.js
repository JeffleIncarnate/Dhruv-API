const express = require("express");
const router = express.Router();

const randomDare = require("../../core/utilities/random.js").getRandomDare;

router.get("/", (_, res) => res.send({ detail: randomDare() }));

module.exports = router;
