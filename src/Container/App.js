
import Login from '../Components/Connexion/Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from '../Components/Connexion/Signup';
import MyPanel from '../Components/Connexion/MyPanel';

function App() {
  return (
    <Router>
      <div className='App' >
        <nav className="">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {/* <Link className="nav-link" to={'/sign-in'}>
                    Home
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/myPanel" element={<MyPanel />} />
            </Routes>
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
