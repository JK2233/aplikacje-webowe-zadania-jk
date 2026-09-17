import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import People from './components/People'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <People/>
      {/* <h1>dfgh</h1> */}
    </>
  )
}

export default App
