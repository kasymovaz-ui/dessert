import { Link } from 'react-router-dom';
import { getCart } from '../data/cart';

export default function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #fdf2f8, #fff0f5)',
      padding: '30px 0',
      boxShadow: '0 5px 20px rgba(233,30,118,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#e91e63', margin: 0, fontSize: '2.5rem' }}>
            Мир вкусных десертов
          </h1>
        </Link>
    
    
      </div>
    </header>
  );
}