import { useParams, Link } from 'react-router-dom';
import { desserts } from '../data/desserts';

export default function DessertDetail() {
  const { id } = useParams();
  const dessert = desserts.find(d => d.id === parseInt(id));

  if (!dessert) {
    return <div style={{ padding: '200px 20px', textAlign: 'center', fontSize: '2rem' }}>
      Десерт не найден
    </div>;
  }

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#e91e63', fontSize: '1.3rem', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Назад к списку
      </Link>

      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        background: 'white',
        padding: '50px',
        borderRadius: '30px',
        boxShadow: '0 15px 40px rgba(233,30,118,0.15)'
      }}>
        <img 
          src={dessert.image} 
          alt={dessert.name}
          style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px' }}
        />
        <div>
          <h1 style={{ fontSize: '3.5rem', color: '#e91e63', marginBottom: '20px' }}>{dessert.name}</h1>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '30px', color: '#555' }}>
            {dessert.description}
          </p>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: '#fff0f5', padding: '20px', borderRadius: '16px', flex: 1 }}>
              <strong>Калорийность:</strong><br />{dessert.calories} ккал
            </div>
            <div style={{ background: '#fff0f5', padding: '20px', borderRadius: '16px', flex: 1 }}>
              <strong>Время приготовления:</strong><br />{dessert.time}
            </div>
          </div>
          <h3 style={{ color: '#e91e63', marginBottom: '15px' }}>Ингредиенты:</h3>
          <ul style={{ fontSize: '1.3rem', lineHeight: '2' }}>
            {dessert.ingredients.map((ing, i) => (
              <li key={i}>• {ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}