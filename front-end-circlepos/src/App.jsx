import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
