import { useState } from 'react'
import './App.css'
import Inicio from './componentes/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <Inicio/>
    </div>
  )
}

export default App
