import { Logo } from "../TopBar/TopBarStyle";
import { Link } from "react-router-dom";
import { Container, ContentDivisory, Footer, RedBar } from "./BottomBarStyle";

export default function BottomBar() {
  return (
    <>
      <RedBar></RedBar>

      <Container>
        <ContentDivisory>
          ABOUT CIRCLE <br style={{marginBottom: "20px"}}/>

          Circle is a complete point of sale, stock management and online sales solution for booksellers. It is an ideal platform for bricks and mortar stores that want to be online, but don’t want the hassle of managing a website and the shop floor independently.
        </ContentDivisory>

        <ContentDivisory>
          <p style={{marginBottom: "20px"}}>CONTACT</p>

          <p style={{marginBottom: "10px"}}>11 Leamington St, Addington</p>
          <p style={{marginBottom: "40px"}}>Christchurch NEW ZEALAND</p>

          <a href="mailto:sales@circlesoft.net">sales@circlesoft.net</a>
        </ContentDivisory>

        <Link to={'/'}>
          <Logo src="https://circlepos.com/wp-content/uploads/2020/05/circlepos.com-normal.png" alt="" />
        </Link>
      </Container>

      <Footer>
        © {new Date().getFullYear()} <a href="/">CirclePOS.com</a> All Rights Reserved.
      </Footer>
    </>
  )
}
