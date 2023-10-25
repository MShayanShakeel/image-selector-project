import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from './Components/Singup/Singup';
import Login from './Components/login/Login';


export default function App()  {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
          <Route path="Singup" element={<Singup />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);