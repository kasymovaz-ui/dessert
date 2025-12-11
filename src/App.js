import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DessertDetail from './components/DessertDetail';
import './App.css';
import BasketList from './pages/BasketList';
import CreateOrder from './pages/CreateOrder';
import BasketDetail from './pages/BasketDetail';
import UpdateOrder from './pages/UpdateOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dessert/:id" element={<DessertDetail />} />
          <Route path="/basket" element={<BasketList />} />
<Route path="/create-order" element={<CreateOrder />} />
<Route path="/basket-detail/:id" element={<BasketDetail />} />
<Route path="/update-order" element={<UpdateOrder />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;