import logo from './logo.svg';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';

function App() {
  return (
   <BrowserRouter>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes/>}/>
      {/* <Route path="expenses" element={<Expenses />} /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
   </BrowserRouter>

   // <NavBar/>
  );
}

export default App;
