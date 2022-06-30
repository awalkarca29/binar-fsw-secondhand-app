import './App.css';
import 'antd/dist/antd.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Buttons, CardProduct, CarouselHeadline, Label, ModalNotification, ModalBuyer, ModalOffer, Footer, SideNav } from './components';
import { Home, Login, Register } from './pages';

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
