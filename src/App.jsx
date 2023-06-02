import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Destination } from './components/Destination';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology ';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />}  />
        <Route path='/DESTINATION' element={<Destination />}  />
        <Route path='/CREW' element={<Crew />}  />
        <Route path='/TECHNOLOGY' element={<Technology />}  />
        <Route path='*' element={<Navigate to='/'/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
