const express = require("express");
const qr = require("qr-image");

const router = express.Router();

router.post("/", async (req, res) => {
  let data = req.body.data;

  if (data === undefined || data === "" || data === null)
    return res.send({ detail: "Provide a url." });

  var qrCode = qr.image(data, { type: "png" });
  res.setHeader("Content-type", "image/png");
  qrCode.pipe(res);
  return res.send(qrCode);
});

module.exports = router;
