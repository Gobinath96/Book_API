const express = require("express");

//Database
const database = require("./database");

//Initalize express
const booky = express();

/*
Route         /
Description   Get all the books
Access        Public
Parameter     None
Methods       Get
*/
booky.get("/",(req,res) =>{
  return res.json({books: database.books});
});

/*
Route         /is
Description   Get specific book on ISBN
Access        Public
Parameter     isbn
Methods       Get
*/
booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter (
    (book) => book.ISBN === req.params.isbn
  )

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
  }

  return res.json({book: getSpecificBook});
});

/*
Route         /is
Description   Get specific book on category
Access        Public
Parameter     category
Methods       Get
*/

booky.get("/c/:category",(req,res) => {
  const getSpecificBook = database.books.filter (
    (book) => book.category.includes(req.params.category)
  )

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category of ${req.params.category}`})
  }

  return res.json({book: getSpecificBook});
});

/*
Route         /author
Description   Get all authors
Access        Public
Parameter     None
Methods       Get
*/

booky.get("/author", (req,res) => {
  return res.json({authors: database.author});
});

/*
Route         /author/book
Description   Get all authors based on books
Access        Public
Parameter     isbn
Methods       Get
*/

booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificAurthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  );

  if (getSpecificAurthor.length === 0) {
    return res.json({
      error: `No author found for the book of ${req.params.isbn}`
    });
  }
  return res.json({authors: getSpecificAurthor});
});

/*
Route         /publications
Description   Get all publications
Access        Public
Parameter     isbn
Methods       Get
*/

booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication});
});

booky.listen(3000,() =>{
  console.log("Server is up and running");
});
