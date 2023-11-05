import { useParams } from "react-router-dom"
import { AddToCartButton, BookInfo, BookPrice, BookTitle, Container } from "./BookPageStyles";
import useGetBookInfoFromAPI from "../../actions/useGetBookInfoFromAPI";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function BookPage() {
  const { id } = useParams();
  const { data: bookInfo } = useGetBookInfoFromAPI(id);
  const { title, author, isbn, price, availableStock } = bookInfo;
  const { cart, setCart } = useContext(CartContext);

  function addBookToCart(e) {
    e.preventDefault();

    setCart([...cart, bookInfo]);
    alert("Book added to cart!");
  }

  return (
    <Container>
      <BookTitle>{title}</BookTitle>
      <BookInfo>Author: {author}</BookInfo>
      <BookInfo>ISBN: {isbn}</BookInfo>
      <BookPrice>${price}</BookPrice>
      <BookInfo>Available stock: only {availableStock} units left!</BookInfo>

      <AddToCartButton onClick={addBookToCart}>Add to cart now!</AddToCartButton>
    </Container>
  )
}