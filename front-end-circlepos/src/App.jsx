import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>

        <BottomBar />
      </BrowserRouter>
    </>
  )
}

export default App
