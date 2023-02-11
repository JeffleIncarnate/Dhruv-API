const express = require("express");
const router = express.Router();

const pool = require("../../core/database/pool");

router.get("/:name", async (req, res) => {
  let name = req.params.name;

  let query = {
    text: "SELECT url from redirects where name=$1",
    values: [name],
  };

  let sqlRes;

  try {
    sqlRes = await pool.query(query);
  } catch (err) {
    return res.send({ detail: err.stack });
  }

  if (sqlRes.rowCount === 0)
    return res.send({ detail: "This redirect does not exist" });

  let url = sqlRes.rows[0].url;

  return res.redirect(url);
});

module.exports = router;
