import { Link, useNavigate } from 'react-router-dom';

export default function UpdateOrder() {
  const navigate = useNavigate();
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');

  const deleteOrder = (id) => {
    if (window.confirm('Удалить заказ?')) {
      orders = orders.filter(o => o.id !== id);
      localStorage.setItem('orders', JSON.stringify(orders));
      window.location.reload();
    }
  };

  const editOrder = (order) => {
    localStorage.setItem('editingOrder', JSON.stringify(order));
    navigate('/create-order');
  };

  return (
    <div style={{ padding: '100px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#e91e63', marginBottom: '50px' }}>
        Мои заказы
      </h1>

      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
          Заказов нет
          <br /><br />
          <Link to="/" className="btn">На главную</Link>
        </p>
      ) : (
        <>
          {orders.map(order => (
            <div key={order.id} className="dessert-card" style={{ margin: '20px auto', maxWidth: '800px', padding: '30px' }}>
              <h3>Заказ №{order.id} от {order.date}</h3>
              <p><strong>Имя:</strong> {order.name} | <strong>Телефон:</strong> {order.phone}</p>
              <p><strong>Адрес:</strong> {order.address}</p>
              <p><strong>Товаров:</strong> {order.items.length} | <strong>Итого:</strong> {order.total} ккал</p>
              <div style={{ marginTop: '20px' }}>
                <button onClick={() => editOrder(order)} style={{ marginRight: '15px', padding: '10px 20px', background: '#ff9800', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  Изменить
                </button>
                <button onClick={() => deleteOrder(order.id)} style={{ padding: '10px 20px', background: '#e91e63', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to="/" className="btn">← На главную</Link>
      </div>
    </div>
  );
}