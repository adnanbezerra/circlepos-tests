import { Link } from "react-router-dom";
import { Container, Logo } from "./TopBarStyle";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function TopBar() {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Link to={'/'}>
        <Logo src="https://circlepos.com/wp-content/uploads/2020/05/circlepos.com-normal.png" alt="" />
      </Link>

      <Link to={'/my-cart'} style={{ "textDecoration": "none", "color": "#fff" }}>
        CART ({cart.length})
      </Link>
    </Container>
  )
}
