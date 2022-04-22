import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Teamdetails from './components/Teamdetails'
import Notfound from './components/Notfound';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='ipl/:id' element={<Teamdetails/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  );
}

export default App;
