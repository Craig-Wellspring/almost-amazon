import { getSingleAuthor } from './authorData';
import { booksByAuthor, getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => (async () => {
  const book = await getSingleBook(bookFirebaseKey);
  const authorObject = await getSingleAuthor(book.author_id);

  return { authorObject, ...book };
})().catch(console.warn);

const viewAuthorDetails = (authorFirebaseKey) => (async () => {
  const author = await getSingleAuthor(authorFirebaseKey);
  const bookList = await booksByAuthor(authorFirebaseKey);

  return { ...author, bookList };
})().catch(console.warn);

export {
  viewBookDetails,
  viewAuthorDetails
};
