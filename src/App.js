


import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Challenge from './pages/Challenge';
import CalendarPage from './pages/CalendarPage';
import TitlePage from './pages/TitlePage';
import {  useSelector, useDispatch } from 'react-redux';

import RequireAuth from './hoc/RequireAuth';
import WeatherPage from './pages/WeatherPage';


function App() {
   const {user} =useSelector(state=>state.authorization);
  
  return (
   <BrowserRouter>
  
      
<Routes>

      <Route path="/" element={
      <RequireAuth>
         <Home />
      </RequireAuth>} />
      <Route path="notes" element={
        <RequireAuth>
          <Notes/>
        </RequireAuth>
      }/>
      <Route path="challenge" element={
      <RequireAuth>
         <Challenge/>
      </RequireAuth>
     } />
      <Route path="calendar" element={
      <RequireAuth>
         <CalendarPage/>
      </RequireAuth>
      } />
      <Route path="weather" element={<WeatherPage/> }/>
      <Route path="autorization" element={<TitlePage/>}/>

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
   </BrowserRouter>

  );
}

export default App;
