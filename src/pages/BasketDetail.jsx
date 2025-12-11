import { useParams, Link } from 'react-router-dom';

export default function BasketDetail() {
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders.find(o => o.id === Number(id));

  if (!order) return <div style={{ padding: '200px', textAlign: 'center' }}>Заказ не найден</div>;

  return (
    <div className="container" style={{ padding: '120px 20px' }}>
      <Link to="/update-order" style={{ color: '#e91e63' }}>← Все заказы</Link>
      <h1 style={{ color: '#e91e63' }}>Заказ #{order.id}</h1>
      <p><strong>Дата:</strong> {order.date}</p>
      <p><strong>Имя:</strong> {order.name}</p>
      <p><strong>Телефон:</strong> {order.phone}</p>
      <p><strong>Адрес:</strong> {order.address}</p>
      <h3 style={{ margin: '30px 0' }}>Товары:</h3>
      {order.items.map(item => (
        <div key={item.id} style={{ margin: '15px 0', padding: '15px', background: '#fff', borderRadius: '12px' }}>
          {item.name} × {item.quantity} = {item.calories * item.quantity} ккал
        </div>
      ))}
      <h3>Итого: {order.total} ккал</h3>
    </div>
  );
}