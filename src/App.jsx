import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Recipe from './Components/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Recipe/>

   </div>
  )
}

export default App
