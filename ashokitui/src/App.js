import './App.css';
import Home from "./Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import LogIn from './login/LogIn';
import SignUp from './signup/SignUp';

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
