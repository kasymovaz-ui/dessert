import DessertCard from '../components/DessertCard';
import { desserts } from '../data/desserts';
import { Link } from 'react-router-dom';
import { getCart } from '../data/cart';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Мир вкусных десертов</h1>
        <p>Выберите свой идеальный десерт!</p>
        <nav style={{ marginTop: '20px' }}>
          <Link to="/" style={{ marginRight: '30px', color: '#e91e63', textDecoration: 'none' }}>
            Главная
          </Link>
          <Link to="/basket" style={{ marginRight: '30px', color: '#e91e63', textDecoration: 'none' }}>
            Корзина ({getCart().length})
          </Link>
          <Link to="/update-order" style={{ color: '#e91e63', textDecoration: 'none' }}>
            Мои заказы
          </Link>
        </nav>
      </header>

      <div className="desserts-grid">
        {desserts.map(dessert => (
          <DessertCard key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}