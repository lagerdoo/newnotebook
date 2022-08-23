
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './login.css'
import SignUp from './Signup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../DB/Firebase-config';


function Login(user) {

    const [loginEmail, setLoginrEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const login = async (e) => {
        e.preventDefault();
        try {
            const cUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(cUser)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className=" justify-content-center  d-flex align-items-center " >
            <Form className='rounded p-3 p-sm-3 '>
                <h3 className='mb-5'> Sign in</h3>

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="Email address" onChange={(event) => setLoginrEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setLoginPassword(event.target.value)} />
                </FloatingLabel>

                <Button variant="outline-dark" type="submit" className='m-4' onClick={login}>
                    Login
                </Button>
                <Form.Group>
                    <Link className=" nav-link" to={'/sign-up'}>
                        <p>Don't have an account ? <span className='signup-btn'>Sign up</span></p>
                    </Link>
                </Form.Group>
            </Form>
            <Routes>
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default Login;