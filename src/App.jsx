import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarouselExamples from './components/SlickCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarouselExamples/>
    </>
  )
}

export default App
