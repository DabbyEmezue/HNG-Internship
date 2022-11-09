const express = require("express");
const BookModel = require("../models/bookModel");

exports.getBook = async (req, res, next) => {
  const Book = await BookModel.findById(req.params.id);
};
