import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/catalog';
import Basket from './components/basket';
import Signin from './components/signin';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalog />} exact />
        <Route path='/basket' element={<Basket />} exact />
        <Route path='/profile' element={<Profile />} exact />
        <Route path='/signin' element={<Signin />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
