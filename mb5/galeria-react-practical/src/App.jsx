import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-4">
        <h1>Galeria zdjęć</h1>
      </div>
    </>
  )
}

export default App
