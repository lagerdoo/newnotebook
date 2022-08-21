import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import './login.css'
function Login() {
    return (
        <div className=" row 
            justify-content-md-center
                 ">
            <div className='loginForm  col-lg-3 col-sm col-md-4' >
                <Form className='form'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3  p-1"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="outline-dark" type="submit" className='mt-4'>
                        Submit
                    </Button>
                    <Form.Group>
                        <Form.Check
                            label="Don'n have an account ? Register"
                            type='radio'
                            className='m-3' />
                    </Form.Group>
                </Form>



            </div>
        </div>
    );
}

export default Login;