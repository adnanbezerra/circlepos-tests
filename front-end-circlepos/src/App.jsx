import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import BookPage from "./pages/BookPage/BookPage";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <GlobalStyle />

      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/book/:id'} element={<BookPage />} />
          <Route path={'my-cart'} element={<CartPage />} />
        </Routes>

        <BottomBar />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
