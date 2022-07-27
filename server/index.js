const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

// middleware
app.use(cors());

// creating endpoint
app.get("/outfit", (req, res) => {
  // to return plain text
  //   res.send("This is working!");

  //   to return json
  const tops = ["Black", "White", "Orange", "Navy"];
  const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
  const shoes = ["White", "Grey", "Black"];

  res.json({
    top: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes),
  });
});

app.get("/intro", (req, res) => {
  res.json({
    greetings: "Hi, I'm",
    name: " Vivek Khanal",
    jobProfile: "Web Developer",
    stream: " Electronics & Communication Engineer",
  });
});

app.listen(8000, () => console.log("API server is running..."));
