const express = require("express");
const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  image: String,
});

const BookModel = mongoose.model("BookModel", BookSchema);
