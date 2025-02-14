import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Query from './pages/Query';
import About from './pages/About';
import Cart from './pages/Cart';
import Badminton from './pages/Badminton';
import Cricket from './pages/Cricket';
import FootBall from './pages/FootBall';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Badminton" element={<Badminton />} />
                <Route path="/Cricket" element={<Cricket />} />
                <Route path="/FootBall" element={<FootBall />} />
                <Route path="/Brands" element={<Brands />} />
                <Route path="/Query" element={<Query />} />
                <Route path="/About" element={<About />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
    </Router>
  );
}

export default App;
