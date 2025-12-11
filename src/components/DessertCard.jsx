import { Link } from 'react-router-dom';
import { addToCart } from '../data/cart';

export default function DessertCard({ dessert }) {
  return (
    <div className="dessert-card">
      <img src={dessert.image} alt={dessert.name} />
      <div className="card-body">
        <h3>{dessert.name}</h3>
        <p>{dessert.description}</p>
        <div className="card-footer">
          <span>{dessert.calories} ккал</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to={`/dessert/${dessert.id}`} className="btn">
              Подробнее →
            </Link>
            <button 
              onClick={() => {
                addToCart(dessert);
                alert(`${dessert.name} добавлен в корзину!`);
              }} 
              className="btn"
              style={{ background: '#ff4081' }}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}