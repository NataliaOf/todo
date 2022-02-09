


import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Challenge from './pages/Challenge';
import Calendar from './pages/Calendar';

function App() {
  
  return (
   <BrowserRouter>
  
      
<Routes>

      <Route path="/" element={<Home />} />
      <Route path="notes" element={<Notes/>}/>
      <Route path="challenge" element={<Challenge/>} />
      <Route path="calendar" element={<Calendar/>} />

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
   </BrowserRouter>

  );
}

export default App;
