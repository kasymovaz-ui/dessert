import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DessertDetail from './components/DessertDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dessert/:id" element={<DessertDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;