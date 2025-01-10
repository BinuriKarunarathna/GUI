import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Query from './pages/Query';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Brands" element={<Brands />} />
                <Route path="/Query" element={<Query />} />
                <Route path="/About" element={<About />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
    </Router>
  );
}

export default App;
