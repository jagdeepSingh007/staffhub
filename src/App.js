import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './components/screen/login/Login';
import Signup from './components/screen/signup/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
