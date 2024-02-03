import './App.css';
import Home from "./components/Home/Home.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import LogIn from './components/login/LogIn.js';
import SignUp from './components/signup/SignUp.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
