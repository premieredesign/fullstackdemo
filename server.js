"use strict";
const express = require("express");
const app = require("express")();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/api/animals", (req, res) => {
  res.json("Hi Clinton the server is working");
});

app.listen(port, () => {
  console.log(`Hi, Clinton your server is running on ${port}`);
});
