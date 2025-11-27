import DessertCard from '../components/DessertCard';
import { desserts } from '../data/desserts';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>Мир вкусных десертов</h1>
        <p>Выберите свой идеальный десерт!</p>
      </header>

      <div className="desserts-grid">
        {desserts.map(dessert => (
          <DessertCard key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}