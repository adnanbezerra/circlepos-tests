import { BookInfo, Container, Title } from "./BookCardStyles";

// eslint-disable-next-line react/prop-types
export default function BookCard({ title, author, price }) {
  return (
    <Container>
      <Title>{title}</Title>
      <BookInfo>Author: {author}</BookInfo>
      <BookInfo>Price: ${price}</BookInfo>
    </Container>
  )
}
