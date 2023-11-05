import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <GlobalStyle />

      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>

        <BottomBar />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
