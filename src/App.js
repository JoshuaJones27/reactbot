import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';

const { getData } = require('./db/db');

const foods = getData();

function App() {
  return ( 
    <>
      <h1 className="heading">Food Order</h1>
      <Cart />
      <div className="cards__container">
        {foods.map((food) => {
          return <Card food = {food} key={food.id} />
        })}
      </div>
    </>
  );
  
}

export default App;
