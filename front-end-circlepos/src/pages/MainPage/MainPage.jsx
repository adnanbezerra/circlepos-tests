import { useEffect, useState } from "react";
import { Container, SecondTitle, Title } from "./MainPageStyle";
import useGetBooksFromAPI from "../../actions/useGetBooksFromAPI";

export default function MainPage() {
  const { data: listFromApi } = useGetBooksFromAPI();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (JSON.stringify(listFromApi) !== JSON.stringify([{}])) {
      setBooks(listFromApi.results)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFromApi]);

  function getBooks() {
    return (
      books.map(entry => {
        return (
          <>
          </>
        )
      })
    )
  }

  return (
    <Container>
      <Title>Welcome to CirclePOS store!</Title>
      <SecondTitle>Here goes a list of our main books:</SecondTitle>

      {getBooks}
    </Container>
  )
}