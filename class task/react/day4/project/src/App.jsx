import { Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <p>logo</p>
      <Navbar/>
      <Routes>
    <Route path="/" element={<home/>} />
    <Route path="/" element={<about/>} />
    <Route path="/" element={<contact/>} />
    <Route path="/" element={<help/>} />
    </Routes>
    </div>
  )
}

export default App
