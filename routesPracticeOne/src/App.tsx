import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PromoPage from './components/PromoPage';
import EnrollPage from './components/EnrollPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="promo-page" element={<PromoPage />}></Route>
        <Route path="enrollment" element={<EnrollPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
