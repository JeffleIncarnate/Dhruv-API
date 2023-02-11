const express = require("express");
const router = express.Router();

const pool = require("../../core/database/pool");

router.get("/", async (_, res) => {
  return res.send({
    detail: (await pool.query("SELECT * FROM redirects")).rows,
  });
});

module.exports = router;
