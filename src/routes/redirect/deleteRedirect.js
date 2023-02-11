const express = require("express");
const router = express.Router();

const pool = require("../../core/database/pool");

router.delete("/", async (req, res) => {
  let name = req.query.name;

  if (name === "" || name === undefined || name === null)
    return res.send({ detail: "Provide a name" });

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

  query = {
    text: "DELETE FROM redirects WHERE name=$1",
    values: [name],
  };

  try {
    sqlRes = await pool.query(query);
  } catch (err) {
    return res.send({ detail: err.stack });
  }

  return res.send({ detail: `Successfully deleted redirect '${name}'` });
});

module.exports = router;
