import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCart, clearCart } from '../data/cart';

export default function CreateOrder() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const editing = localStorage.getItem('editingOrder');
    if (editing) {
      const order = JSON.parse(editing);
      setName(order.name);
      setPhone(order.phone);
      setAddress(order.address);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editing = localStorage.getItem('editingOrder');
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');

    if (editing) {
      const oldOrder = JSON.parse(editing);
      const index = orders.findIndex(o => o.id === oldOrder.id);
      orders[index] = { ...oldOrder, name, phone, address, date: new Date().toLocaleString() };
      localStorage.removeItem('editingOrder');
      alert('Заказ изменён!');
    } else {
      const order = {
        id: Date.now(),
        name, phone, address,
        items: getCart(),
        total: getCart().reduce((s, i) => s + i.calories * i.quantity, 0),
        date: new Date().toLocaleString()
      };
      orders.push(order);
      clearCart();
      alert('Заказ оформлен!');
    }

    localStorage.setItem('orders', JSON.stringify(orders));
    navigate('/update-order');
  };

  return (
    <div style={{ padding: '100px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#e91e63' }}>
        {localStorage.getItem('editingOrder') ? 'Редактировать заказ' : 'Оформление заказа'}
      </h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '12px', border: '2px solid #ffd1dc' }} />
        <input type="tel" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} required style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '12px', border: '2px solid #ffd1dc' }} />
        <textarea placeholder="Адрес доставки" value={address} onChange={e => setAddress(e.target.value)} required rows="4" style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '12px', border: '2px solid #ffd1dc' }} />
        <button type="submit" style={{ width: '100%', padding: '18px', background: '#e91e63', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.3rem', marginTop: '20px', cursor: 'pointer' }}>
          {localStorage.getItem('editingOrder') ? 'Сохранить изменения' : 'Подтвердить заказ'}
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link to={localStorage.getItem('editingOrder') ? '/update-order' : '/basket'}>
          ← Назад
        </Link>
      </div>
    </div>
  );
}