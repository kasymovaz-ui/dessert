import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DessertDetail from './components/DessertDetail';
import BasketList from './pages/BasketList';
import CreateOrder from './pages/CreateOrder';
import UpdateOrder from './pages/UpdateOrder';
import BasketDetail from './pages/BasketDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dessert/:id" element={<DessertDetail />} />
            <Route path="/basket" element={<BasketList />} />
            <Route path="/create-order" element={<CreateOrder />} />
            <Route path="/update-order" element={<UpdateOrder />} />
            <Route path="/basket-detail/:id" element={<BasketDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;