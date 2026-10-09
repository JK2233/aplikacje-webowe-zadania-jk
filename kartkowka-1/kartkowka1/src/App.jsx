import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import systemy from './data/systemy';
import Pozycja from './views/Pozycja';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Liczba systemów operacyjnych: {systemy.length}</h2>
      
      <ol>
        {systemy.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>
    </div>
  );
}

export default App
