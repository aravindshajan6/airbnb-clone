import './../src/assets/styles/App.css';
import CardComponent from './components/CardComponent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import dataArray from './components/data';

function App() {
  const cards = dataArray.map((dataItem) => {
    return (
      <div>
        <CardComponent key={dataItem.id} item={dataItem} />
      </div>
    );
  });
  return (
    <div className='main'>
      <Navbar />
      <Hero />
      <section className='card-list'>{cards}</section>
    </div>
  );
}

export default App;
