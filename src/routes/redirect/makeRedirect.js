const express = require("express");
const router = express.Router();

const pool = require("../../core/database/pool");
const tables = require("../../core/database/tables");

router.post("/", async (req, res) => {
  await pool.query(tables);

  let values = [req.body.name, req.body.url];

  let redirectObj = {
    name: req.body.name,
    url: req.body.url,
  };

  for (let i = 0; i < values.length; i++)
    if (values[i] === undefined || values[i] === "" || values[i] === null)
      return res.send({ detail: "Provide all details" });

  let query = {
    text: "SELECT * from redirects where name=$1",
    values: [redirectObj.name],
  };
  let sqlRes;

  try {
    sqlRes = pool.query(query);
  } catch (err) {
    return res.send({ detail: err.stack });
  }

  if ((await sqlRes).rowCount !== 0)
    return res.send({ detail: "A endpoint with this name already exists" });

  query = {
    text: "INSERT INTO redirects (name, url) VALUES ($1, $2)",
    values: [redirectObj.name, redirectObj.url],
  };

  try {
    sqlRes = pool.query(query);
  } catch (err) {
    return res.send({ detail: err.stack });
  }

  return res.status(201).send({
    detail: "successfully added redirect.",
    your_url: `${req.protocol}://${req.headers.host}/r/${redirectObj.name}`,
  });
});

module.exports = router;
