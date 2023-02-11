const express = require("express");

const app = express();
app.use(express.json());
const port = 3000 || process.env.port;

app.get("/", (req, res) => {
  return res.send({ detail: "Welcome to the Dhruv API" });
});

// Require Routes -- RANDOM
const headsOrTails = require("./routes/fun/headsOrTails");
const randomDare = require("./routes/fun/randomDare");
const randomTruth = require("./routes/fun/randomTruth");

// Require Routes -- REDIRECT
const makeRedirect = require("./routes/redirect/makeRedirect");
const getRedirects = require("./routes/redirect/getRedirects");

// Use Routes -- RANDOM
app.use("/random/headsOrTails", headsOrTails);
app.use("/random/randomDare", randomDare);
app.use("/random/randomTruth", randomTruth);

// Use Routes -- REDIRECT
app.use("/redirect/makeRedirect", makeRedirect);
app.use("/redirect/getRedirects", getRedirects);

app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`);
});
