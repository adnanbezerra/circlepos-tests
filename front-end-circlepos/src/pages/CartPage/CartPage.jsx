import { useContext, useState } from "react";
import { BuyButton, BuyCartButton, BuyCartContainer, Container, FormInput, Label, PageInfo, PageTitle } from "./CartPageStyles";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import useBuyCart from "../../actions/useBuyCart";
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    name: "",
    address: "",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });
  const { act } = useBuyCart();
  const navigate = useNavigate();

  function sumTotal() {
    let sum = 0;

    for (const iterator of cart) {
      sum += iterator.price;
    }

    return sum;
  }

  function getCartItems() {
    return (
      cart.length === 0 ?
        <PageInfo>No items on cart yet...</PageInfo>
        :
        cart.map(entry => {
          return (
            <CartItem
              key={entry.id}
              cartInfo={entry}
            />
          )
        })
    )
  }

  function toggleForm() {
    setShowForm(true);
  }

  function buyCart(e) {
    e.preventDefault();
    const success = act(cart);

    if (success) {
      alert("Your book was purchased!");
      navigate('/');
      setCart([]);
    } else {
      alert("Try again later!");
    }
  }

  return (
    <Container>
      <PageTitle>Your cart</PageTitle>
      <PageInfo>{cart.length} item(s) currently</PageInfo>
      {getCartItems()}

      <PageTitle>Total value: ${sumTotal()}</PageTitle>

      <BuyCartButton
        onClick={toggleForm}>
        Buy now!
      </BuyCartButton>

      <BuyCartContainer showForm={showForm}>
        <Label for="name">Your name:</Label>
        <FormInput id="name"
          value={cardInfo.name}
          onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
          placeholder="Your name here"
        />

        <Label for="address">Enter your address:</Label>
        <FormInput id="address"
          value={cardInfo.address}
          onChange={e => setCardInfo({ ...cardInfo, address: e.target.value })}
          placeholder="Your address here"
        />

        <Label for="credcard">Your credit card number:</Label>
        <FormInput id="credcard"
          value={cardInfo.cardNumber}
          onChange={e => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
          placeholder="Your card number here"
        />

        <Label for="date">Your card expiration date:</Label>
        <FormInput id="date"
          value={cardInfo.expirationDate}
          onChange={e => setCardInfo({ ...cardInfo, expirationDate: e.target.value })}
          placeholder="Your expiration date here"
        />

        <Label for="cvv">Your card CVV:</Label>
        <FormInput id="cvv"
          value={cardInfo.cvv}
          onChange={e => setCardInfo({ ...cardInfo, cvv: e.target.value })}
          placeholder="Your CVV here"
        />

        <BuyButton onClick={buyCart}>Confirm</BuyButton>
      </BuyCartContainer>
    </Container>
  )
}