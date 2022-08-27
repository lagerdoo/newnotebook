
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../DB/Firebase-config';


function Login() {

    const navigate = useNavigate();

    const [loginEmail, setLoginrEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            if (user) {
                navigate('/newnotebook/myPanel')
            }
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
                    <Link className=" nav-link" to={'/newnotebook/sign-up'}>
                        <p>Don't have an account ? <span className='signup-btn'>Sign up</span></p>
                    </Link>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Login;