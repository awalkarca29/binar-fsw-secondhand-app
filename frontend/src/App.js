import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register, Notifications, ProductSearch, ProductDetail, Profile, OfferInformation } from './pages';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-information" element={<OfferInformation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
