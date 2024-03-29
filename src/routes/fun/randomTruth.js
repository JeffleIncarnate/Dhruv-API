const express = require("express");
const router = express.Router();

const randomTruth = require("../../core/utilities/random").getRandomTruth;

router.get("/", async (_, res) => res.send({ detail: randomTruth() }));

module.exports = router;
