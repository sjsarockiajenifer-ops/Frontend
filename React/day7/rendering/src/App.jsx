
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NumberRendering from './NumberRendering'
import BooleanRendering from './BooleanRendering'
import StringRendering from './StringRendering'
import Falsey from './Falsey'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/string" element={<StringRendering />} />
        <Route path="/number" element={<NumberRendering />} />
        <Route path="/boolean" element={<BooleanRendering />} />
        <Route path="/falsey" element={<Falsey />} />

      </Routes>
    </div>
  )
} 

export default App


