/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BookInfo, Container, Info, Price, Title } from "./CartItemStyles";
import { BsFillTrash3Fill } from 'react-icons/bs';
import { CartContext } from "../../context/CartContext";

export function CartItem({ cartInfo }) {
  const { title, author, isbn, price } = cartInfo;
  const { cart, setCart } = useContext(CartContext);

  function removeFromCart() {
    const newCart = cart.filter(item => item !== cartInfo)

    setCart(newCart);
  }

  return (
    <Container>
      <Info>
        <Title>{title}</Title>
        <BookInfo>{author}</BookInfo>
        <BookInfo>{isbn}</BookInfo>
      </Info>
      <Price>
        <p>${price}</p>
        <BsFillTrash3Fill
          style={{ color: "white", backgroundColor: "red", padding: "5px", borderRadius: "50%" }}
          onClick={removeFromCart}
        />
      </Price>
    </Container>
  )
}