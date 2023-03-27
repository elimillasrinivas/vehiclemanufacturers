import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Vehiclemanufacturers from './components/Vehiclemanufacturers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vehiclemanufacturers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
