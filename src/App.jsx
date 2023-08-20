import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Destination } from './components/Destination';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology ';
import { DestinationPlaces } from './components/DestinationPlaces';
import { CrewMembers } from './components/CrewMembers';
import { SpaceshipComponents } from './components/SpaceshipComponents';
import {data} from  './data';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />}  />
        <Route path='/DESTINATION/*' element={<Destination />}>
          <Route path='*' element={<Navigate to='MILLER' />} />
          {data.destinations.map(d=><Route key={d.name} path={`${d.name.toUpperCase()}`} element={<DestinationPlaces d={d} />} />)}
        </Route>
        <Route path='/CREW/*' element={<Crew />}>
          <Route path='*' element={<Navigate to='Joseph-Cooper' />} />
            {data.crew.map(d=><Route key={d.name} path={`${d.name.replace(' ','-')}`} element={<CrewMembers d={d} />} />)}
        </Route>
        <Route path='/TECHNOLOGY/*' element={<Technology />}  >
          <Route path='*' element={<Navigate to='Endurance' />} />
              {data.technology.map(d=><Route key={d.name} path={`${d.name.replace(' ','-')}`} element={<SpaceshipComponents d={d} />} />)}
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

