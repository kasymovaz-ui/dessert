export default function Footer() {
  return (
    <footer style={{
      background: '#fdf2f8',
      padding: '50px 20px',
      marginTop: '100px',
      borderTop: '4px solid #ffd1dc',
      textAlign: 'center',
      color: '#e91e63'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Спасибо за сладкий выбор!</h2>
        <p style={{ fontSize: '1.3rem', margin: '10px 0' }}>© 2025 Мир вкусных десертов</p>
        <p style={{ color: '#999' }}>С любовью к каждому кусочку</p>
      </div>
    </footer>
  );
}