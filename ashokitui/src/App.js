import './App.css';
import Home from "./Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import LogIn from './login/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LogIn/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
