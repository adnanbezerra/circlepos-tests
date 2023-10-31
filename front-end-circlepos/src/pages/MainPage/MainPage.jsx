import { useEffect, useState } from "react";
import { BooksDiv, Container, SecondTitle, Title } from "./MainPageStyle";
import useGetBooksFromAPI from "../../actions/useGetBooksFromAPI";
import BookCard from "../../components/BookCard/BookCard";

export default function MainPage() {
  const { data } = useGetBooksFromAPI();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify([{}])) {
      setBooks(data.books);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getUniqueRandomBooks(array, count) {
    const randomBooks = new Set();

    while (randomBooks.size < count) {
      const index = getRandomIndex(array);
      randomBooks.add(books[index]);
    }

    return Array.from(randomBooks);
  }

  function getBooks() {
    const randomBooks = getUniqueRandomBooks(books, 10);

    return (
      randomBooks.map(entry => {
        return (
          <BookCard
            key={entry.id}
            title={entry.title}
            author={entry.author}
            price={entry.price}
          />
        )
      }))
  }

  return (
    <Container>
      <Title>Welcome to CirclePOS store!</Title>

      <SecondTitle>Our most-selled books:</SecondTitle>
      <BooksDiv>
        {getBooks()}
      </BooksDiv>

      <SecondTitle>Books you may like reading:</SecondTitle>
      <BooksDiv>
        {getBooks()}
      </BooksDiv>

      <SecondTitle>Here goes a list of our main books:</SecondTitle>
      <BooksDiv>
        {getBooks()}
      </BooksDiv>
    </Container>
  )
}