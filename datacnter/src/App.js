import logo from './logo.svg';
import './App.css';
import { Route, Routes, Outlet } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Ulubari from './pages/Ulubari';
import Panbazar from './pages/Panbazar';
import Jail from './pages/Jail';
import Ng from './pages/Ng';
import Medical from './pages/Medical';
import Jalukbari from './pages/Jalukbari';
import Dharapur from './pages/Dharapur';
import Six_mile from './pages/Six_mile';
import Neharu_Stadium from './pages/Neharu_Stadium';
import Kalapahar from './pages/Kalapahar';
import Uzanbazar from './pages/Uzanbazar';
import PaltanBazar from './pages/PaltanBazar';
import Bamunimaidan from './pages/Bamunimaidan';

function App() {
  return (
    
      
      <BrowserRouter>
    <Ng />
      <Routes>


      <Route>
      <Route path='/uzanbazar'  element={<Uzanbazar/>}></Route>
      <Route path='/paltanbazar'  element={<PaltanBazar/>}></Route>
      <Route path='/Medical'  element={<Medical/>}></Route>
      <Route path='/Jail'  element={<Jail/>}></Route>
      <Route path='/jalukbari'  element={<Jalukbari/>}></Route>
      <Route path='/sixmile'  element={<Six_mile/>}></Route>
      <Route path='/Dharapur'  element={<Dharapur/>}></Route>
      <Route path='/neharustadium'  element={<Neharu_Stadium/>}></Route>
      <Route path='/kalapahar'  element={<Kalapahar/>}></Route>
      {/* <Route path='/bamunimaidan'  element={<Bamunimaidan/>}></Route> */}
      </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
