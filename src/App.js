import './App.css';
import React, {useState} from 'react';



function App() {
  const [color, setColor] = useState('red');
  const [car, setPop] = useState({
    color: 'red',
    brand: 'bmw',
    model: 'x5'

  })
  const updateColor = () => {
    setPop(previousDetail => {
      return {...previousDetail,color:'blue'}
    })
  }
  return (
    <>
    <h1>My favorite color is {color}!</h1>
    <h2>My Car color is {car.color}</h2>
    <button type='button' onClick={() => setColor('blue')}>Blue</button>
    <button type='button' onClick={() => setColor('red')}>Red</button>
    <button type='button' onClick={() => setColor('green')}>Green</button>
    <button type='button' onClick={updateColor}>Blue</button>
    </>
  );
}

export default App;
