

import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { BrowserRouter as Navigate, Routes, Route, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'

import './login.css'
import { auth } from '../../DB/Firebase-config';
import MyPanel from './MyPanel';
import Login from './Login';


function SignUp() {


    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const logout = async () => {
        signOut(auth)
    }
    const register = async (e) => {
        e.preventDefault();
        try {
            const cUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            // console.log(user);
            if (cUser.length) {
                // updateProfile(cUser, registerName)
                console.log("it's successfull");
            }


            console.log(user?.email);
            console.log(user?.displayName);
            return <Navigate replace to="/myPanel" />;
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className=" justify-content-center  d-flex align-items-center " >
            <Form className='rounded p-3 p-sm-3 '>
                <h3 className='mb-5'> Sign up</h3>
                <FloatingLabel controlId="floatingNameInput" label="Your name" className="mb-3">
                    <Form.Control type="input" onChange={(event) => setRegisterName(event.target.value)} placeholder="Your name" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmailInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="Email address" onChange={(event) => setRegisterEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setRegisterPassword(event.target.value)} />
                </FloatingLabel>

                <Button variant="outline-dark" type="submit" className='m-4' onClick={logout}>
                    Sign up
                </Button>
                <Form.Group>
                    <Link className="nav-link" to={'/sign-in'}>
                        <p>Have an account ? <span className='signin-btn'>Login</span></p>
                    </Link>
                </Form.Group>
            </Form>
            <Routes>
                <Route path="/sign-in" element={<Login />} />
                <Route path="/myPanel" element={<MyPanel />} />
            </Routes>
        </div>
    );
}

export default SignUp;