import { Link } from 'react-router-dom';
import { getCart, updateQuantity, removeFromCart, clearCart } from '../data/cart';

export default function BasketList() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.calories * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>Корзина пуста</h2>
        <Link to="/" className="btn" style={{ marginTop: '20px', padding: '15px 40px' }}>
          ← Вернуться к десертам
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '120px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#e91e63', marginBottom: '40px' }}>
        Корзина
      </h1>

      {cart.map(item => (
        <div key={item.id} className="dessert-card" style={{ marginBottom: '20px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={item.image} alt="" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px' }} />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>{item.calories} ккал × {item.quantity} = {item.calories * item.quantity} ккал</p>
              <div style={{ marginTop: '10px' }}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '8px 12px' }}>-</button>
                <span style={{ margin: '0 15px', fontWeight: 'bold' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '8px 12px' }}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '20px', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Итого: {total} ккал</h2>
        <Link to="/create-order" className="btn" style={{ fontSize: '1.3rem', padding: '15px 50px', margin: '20px' }}>
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}