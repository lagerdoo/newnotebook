
import Login from '../Components/Connexion/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Components/Connexion/Signup';
import MyPanel from '../Components/MainPanel/MyPanel';
import NotFound from '../Components/Connexion/NotFound';


function App() {
  return (
    <div className='App' >
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/newnotebook" element={<Login />} />
            <Route path="newnotebook/sign-in" element={<Login />} />
            <Route path="newnotebook/sign-up" element={<SignUp />} />
            <Route path="newnotebook/myPanel" element={<MyPanel />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
