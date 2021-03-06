import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE BOOK
const deleteBook = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks(uid).then(resolve);
    })
    .catch(reject);
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks(bookObj.uid).then(resolve);
        });
    }).catch(reject);
});

// UPDATE BOOK
const updateBook = (uid, bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks(uid).then(resolve))
    .catch(reject);
});

// SEARCH BOOKS

// FILTER BOOKS ON SALE
const booksOnSale = (uid) => new Promise((resolve, reject) => {
  getBooks(uid)
    .then((userBooks) => {
      const onSaleBooks = userBooks.filter((book) => book.sale);
      resolve(onSaleBooks);
    }).catch(reject);
});

// FILTER BOOKS BY AUTHOR ID
const booksByAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
  booksOnSale,
  booksByAuthor
};
