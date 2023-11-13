import { BooksDiv, Container, SecondTitle, Title } from "./MainPageStyle";
import useGetBooksFromAPI from "../../actions/useGetBooksFromAPI";
import BookCard from "../../components/BookCard/BookCard";

export default function MainPage() {
  const { data: books } = useGetBooksFromAPI();

  function getBooks() {
    return (
      books.map(entry => {
        return (
          <BookCard
            key={entry.id}
            id={entry.id}
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