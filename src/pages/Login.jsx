import React, { useState } from 'react'
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



import "../style/login.css";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()


  const login = async (e) => {
    e.preventDefault()


    try {
      setLoading(true)
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, {email,password});
			localStorage.setItem("token", res.data);
      setLoading(false)
      toast.success('logined')
      navigate('/shop')
      
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        setLoading(false)
				toast.error(error.response.data.message);
			}
		}

    // try {
    //   setLoading(true)
    //   const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    //   const user = userCredentials.user
    //   console.log(user, 'my user');
    //   setLoading(false)
    //   toast.success('logined')
    //   navigate('/shop')
    // } catch (error) {
    //   toast.error(error.message)
    //   setLoading(false)
    // }

  }


  return (
    <Helmet title={'Login'}>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className="text-center"><h5>Loading.....</h5></Col> :
                <Col lg='6' className='m-auto text-center' >
                  <h3 className='fw-bold fs-3'>Login</h3>
                  <Form className='auth__form ' onSubmit={login}>

                    <FormGroup className='form__group'>
                      <input type="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <input type="password" placeholder='enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                    </FormGroup>
                    <button type='submin' className="buy__btn login__btn">Login</button>
                  </Form>
                  <p>Dont have an account?{" "} <Link to='/signup'>Create an account</Link> </p>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login