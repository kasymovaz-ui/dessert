import { Link } from 'react-router-dom';

export default function DessertCard({ dessert }) {
  return (
    <div className="dessert-card">
      <img src={dessert.image} alt={dessert.name} />
      <div className="card-body">
        <h3>{dessert.name}</h3>
        <p>{dessert.description}</p>
        <div className="card-footer">
          <span>{dessert.calories} ккал</span>
          <Link to={`/dessert/${dessert.id}`} className="btn">
            Подробнее →
          </Link>
        </div>
      </div>
    </div>
  );
}