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
    <div className='container'>
      <h3 className='h3'>Liczba systemów operacyjnych: {systemy.length}</h3>
      
      <ol>
        {systemy.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for="nameSurname">
            Imię i nazwisko:<br/>
          </label>
          <input id='nameSurname' type="text" className='form-control' ref={imieNazwiskoRef} />
        </div>
        <div className='form-group'>
          <label for="os">
            Numer systemu operacyjnego:<br/>
          </label>
          <input id='os' type="number" className='form-control' ref={numerSystemuRef} />
        </div>
        <br />
        <button type="submit" className='btn btn-primary'>Zatwierdź wybór</button>
      </form>
    </div>
  );
}

export default App
