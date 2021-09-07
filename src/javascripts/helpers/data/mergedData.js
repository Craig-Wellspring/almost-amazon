import { deleteAuthor, getSingleAuthor } from './authorData';
import { booksByAuthor, deleteBook, getSingleBook } from './bookData';

const viewBookDetails = async (bookFirebaseKey) => {
  const bookObject = await getSingleBook(bookFirebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);

  return { authorObject, ...bookObject };
};

const viewAuthorDetails = async (authorFirebaseKey) => {
  const author = await getSingleAuthor(authorFirebaseKey);
  const bookList = await booksByAuthor(authorFirebaseKey);

  return { ...author, bookList };
};

const deleteAuthorAndBooks = (authorFirebaseKey, uid) => new Promise((resolve, reject) => {
  booksByAuthor(authorFirebaseKey).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey, uid));

    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorFirebaseKey, uid)));
  }).catch(reject);
});

export {
  viewBookDetails,
  viewAuthorDetails,
  deleteAuthorAndBooks
};
