// Data
const data = require("../data/data");

function getRandNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function headsOrTails() {
  let num = getRandNumber(0, 1);
  return num == 1 ? "Heads" : "Tails";
}

function getRandomDare() {
  return data.dares[getRandNumber(0, data.dares.length - 1)];
}

function getRandomTruth() {
  return data.truths[getRandNumber(0, data.truths.length - 1)];
}

module.exports = {
  getRandNumber,
  headsOrTails,
  getRandomDare,
  getRandomTruth,
};
