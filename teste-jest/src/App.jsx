import { useState } from 'react'
import Grid from './Grid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Meu teste de Grid</h1>
      <div lclass="card"> 
      <Grid />
      </div>
     
      <h6>É, pelo jeito deu certo!</h6>
    </>
  )
}

export default App
