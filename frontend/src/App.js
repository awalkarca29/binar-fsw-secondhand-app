import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductSearch, Login, Register } from './pages';
import { Home, Login, Register, Notifications,ProductSearch } from './pages';

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<ProductSearch />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/notifications' element={<Notifications />} />
        </Routes>
        {/* <ListProductSeller/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
