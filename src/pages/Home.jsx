
import DessertCard from '../components/DessertCard';
import { desserts } from '../data/desserts';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="site-header">
        <div className="container">
          <h1>Мир вкусных десертов</h1>
          <nav>
            <Link to="/">Главная</Link>
            <a href="#about">О проекте</a>
            <a href="#contact">Контакты</a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h2>Выберите свой идеальный десерт!</h2>
            <p>Более 6 авторских рецептов с подробным описанием</p>
          </section>

          <div className="desserts-grid">
            {desserts.map(dessert => (
              <DessertCard key={dessert.id} dessert={dessert} />
            ))}
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Радомир Нармухамедов — React проект по теме «Десерты»</p>
          <p>Сделано с любовью к сладкому</p>
        </div>
      </footer>
    </>
  );
}