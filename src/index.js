const express = require("express");

const app = express();
const port = 3000 || process.env.port;

app.get("/", (req, res) => {
  return res.send({ detail: "Welcome to the Dhruv API" });
});

// Require Routes -- RANDOM
const headsOrTails = require("./routes/fun/headsOrTails");
const randomDare = require("./routes/fun/randomDare");

// Use Routes -- RANDOM
app.use("/random/headsOrTails", headsOrTails);
app.use("/random/randomDare", randomDare);

app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`);
});
