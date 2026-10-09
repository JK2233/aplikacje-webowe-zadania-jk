import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import systemy from './data/systemy';
import Pozycja from './views/Pozycja';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const imieNazwiskoRef = useRef(null);
  const numerSystemuRef = useRef(null);
  // const [count, setCount] = useState(0)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const imieNazwisko = imieNazwiskoRef.current.value;
    const numer = parseInt(numerSystemuRef.current.value, 10);

    console.log("Imię i nazwisko:", imieNazwisko);

    if (numer >= 1 && numer <= systemy.length) {
      console.log(systemy[numer - 1]);
    } else {
      console.log("Nieprawidłowy numer systemu operacyjnego");
    }
  };
  return (
    <div>
      <h2>Liczba systemów operacyjnych: {systemy.length}</h2>
      
      <ol>
        {systemy.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię i nazwisko:
            <input type="text" ref={imieNazwiskoRef} />
          </label>
        </div>
        <div>
          <label>
            Numer systemu operacyjnego:
            <input type="number" ref={numerSystemuRef} />
          </label>
        </div>
        <button type="submit">Zatwierdź wybór</button>
      </form>
    </div>
  );
}

export default App
