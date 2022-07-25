import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Home, Login, Register, Notifications, ProductSearch, ProductDetail, Profile, OfferInformation, AddProduct, UpdateProduct, MyProductSeller, About, ContactUs } from './pages';

function App() {
  let { keyword } = useParams();
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<ProductSearch />} />
          <Route path="/search/:searchKeyword" element={<ProductSearch params={keyword} />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-information/:id" element={<OfferInformation />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/myproduct-seller" element={<MyProductSeller />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
