import './App.css';
import 'antd/dist/antd.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductSearch } from './pages';

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<ProductSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
