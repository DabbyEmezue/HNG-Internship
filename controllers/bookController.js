const express = require("express");
const mongoose = require("mongoose");

const BookModel = require("../models/bookModel");

exports.getBooks = async (req, res) => {
  const allBooks = await BookModel.find();
  res.status(200).json({
    status: "success",
    data: allBooks,
  });
};

exports.addBook = async (req, res) => {
  const newBook = await BookModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: newBook,
  });
};
