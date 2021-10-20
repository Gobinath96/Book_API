const books =[
  {
    ISBN: "12345Book",
    title: "Tesla!!!",
    pubDate: "2012-09-18",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications: [1],
    category: ["tech","space","education"]
  }
]

const author = [
  {
    id: 1,
    name: "Gobi",
    books: ["12345Book", "secretBook"]
  },
  {
    id: 2,
    name: "Elon Mask",
    books: ["12345Book"]
  }
]

const publication = [
  {
    id: 1,
    name: "writex",
    books: ["12345Book"]
  }
]

module.exports = {books, author, publication};
