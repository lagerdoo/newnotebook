
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './login.css'
function SignUp() {
    return (
        <div className=" justify-content-center  d-flex align-items-center " >
            <Form className='rounded p-3 p-sm-3 '>
                <h3 className='mb-5'> Sign up</h3>
                <FloatingLabel controlId="floatingInput" label="Your name" className="mb-3">
                    <Form.Control type="email" placeholder="Your name" />

                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="Email address" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Button variant="outline-dark" type="submit" className='m-4'>
                    Sign up
                </Button>
                <Form.Group>
                    <Link className="nav-link" to={'/sign-in'}>
                        <p>Have an account ? <span className='signin-btn'>Login</span></p>
                    </Link>
                </Form.Group>
            </Form>
            <Routes>
                <Route path="/sign-in" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default SignUp;