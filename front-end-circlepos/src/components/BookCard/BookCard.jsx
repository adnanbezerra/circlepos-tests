import { BookInfo, Container, Title } from "./BookCardStyles";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function BookCard({ title, author, price, id }) {
  const link = `/book/${id}`;

  return (
    <Link to={link} style={{"textDecoration": "none"}}>
      <Container>
        <Title>{title}</Title>
        <BookInfo>Author: {author}</BookInfo>
        <BookInfo>Price: ${price}</BookInfo>
      </Container>
    </Link>
  )
}
