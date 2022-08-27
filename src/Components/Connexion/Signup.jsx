

import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import {
    createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth'
import './login.css'
import { auth } from '../../DB/Firebase-config';

import Login from './Login';


function SignUp() {

    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            if (user) {
                await updateProfile(auth.currentUser, {
                    displayName: registerName
                }).then(() => {
                    console.log(auth.currentUser.displayName);
                })
                navigate('/newnotebook/myPanel')
            }
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

                <Button variant="outline-dark" type="submit" className='m-4' onClick={register}>
                    Sign up
                </Button>
                <Form.Group>
                    <Link className="nav-link" to={'/newnotebook/sign-in'}>
                        <p>Have an account ? <span className='signin-btn'>Login</span></p>
                    </Link>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SignUp;