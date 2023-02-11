/**
 * @swagger
 * /yes:
 *  get:
 *   tag:
 *    - Yes
 *    description: Y E S
 *    responses:
 *      200:
 *        description: YES YES YES
 */
const express = require("express");
const router = express.Router();

const headsOrTails = require("../../core/utilities/random").headsOrTails;

router.get("/", (req, res) => res.send(headsOrTails()));

module.exports = router;
