import { useState } from 'react'
import Card, {} from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>props with tailwind and vite</h1>
      <Card />
    </>
  )
}

export default App
