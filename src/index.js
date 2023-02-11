const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

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
const redirect = require("./routes/redirect/redirect");
const deleteRedirect = require("./routes/redirect/deleteRedirect");

// Use Routes -- RANDOM
app.use("/random/headsOrTails", headsOrTails);
app.use("/random/randomDare", randomDare);
app.use("/random/randomTruth", randomTruth);

// Use Routes -- REDIRECT
app.use("/redirect/makeRedirect", makeRedirect);
app.use("/redirect/getRedirects", getRedirects);
app.use("/r", redirect);
app.use("/redirect/deleteRedirect", deleteRedirect);

app.listen(port, () => {
  console.log(`Listening at on port ${port}`);
});
