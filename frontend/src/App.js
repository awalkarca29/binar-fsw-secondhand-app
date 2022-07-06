import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register, Notifications, ProductSearch, ProductDetail, OfferInformation } from './pages';
import { ModalBuyer } from './components';

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-information" element={<OfferInformation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
