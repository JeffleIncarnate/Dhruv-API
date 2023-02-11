const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const port = 3000 || process.env.port;

const app = express();

// Swagger -- Start
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dhruv API",
      version: "0.1.0",
      description:
        "This is the new Dhruv API, it is a general purpose API and can do many of the things",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Twitter",
        url: "https://twitter.com/RayatDhruv",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
// Swagger -- End

app.get("/", (req, res) => {
  return res.redirect(`${req.protocol}://${req.headers.host}/docs`);
});

app.get("/yes", (req, res) => {
  return res.sendStatus(200);
});

// Require Routes
const headsOrTails = require("./routes/fun/headsOrTails.js");

// User Routes
app.use("/headsOrTails", headsOrTails);

app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`);
});
