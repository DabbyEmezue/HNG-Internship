const express = require("express");
const mongoose = require("mongoose");

const BookModel = require("../models/bookModel");

exports.getBooks = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Welcome",
  });
};

exports.addBook = async (req, res, next) => {
  const newBook = await BookModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: newBook,
  });
  next();
};
