import { Link } from "react-router-dom";
import { Container, Logo } from "./TopBarStyle";

export default function TopBar() {
  return (
    <Container>
      <Link to={'/'}>
        <Logo src="https://circlepos.com/wp-content/uploads/2020/05/circlepos.com-normal.png" alt="" />
      </Link>

      Cart
    </Container>
  )
}