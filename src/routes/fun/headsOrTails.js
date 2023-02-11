const express = require("express");
const router = express.Router();

const headsOrTails = require("../../core/utilities/random").headsOrTails;

router.get("/", async (_, res) => res.send({ detail: headsOrTails() }));

module.exports = router;
