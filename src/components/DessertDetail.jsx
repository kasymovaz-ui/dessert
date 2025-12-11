import { useParams, Link } from 'react-router-dom';
import { desserts } from '../data/desserts';

export default function DessertDetail() {
  const { id } = useParams();
  const dessert = desserts.find(d => d.id === parseInt(id));

  if (!dessert) {
    return (
      <div style={{ padding: '200px', textAlign: 'center', fontSize: '2rem' }}>
        Десерт не найден
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-btn">← Назад к списку</Link>
      
      <div className="detail-content">
        <img src={dessert.image} alt={dessert.name} />
        
        <div className="detail-info">
          <h1>{dessert.name}</h1>
          <p className="description">{dessert.description}</p>
          
          <div className="info-blocks">
            <div className="info-item">
              <strong>Калорийность:</strong> {dessert.calories} ккал
            </div>
            <div className="info-item">
              <strong>Время приготовления:</strong> {dessert.time}
            </div>
          </div>

          <h3>Ингредиенты:</h3>
          <ul className="ingredients">
            {dessert.ingredients.map((ing, i) => (
              <li key={i}>• {ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}