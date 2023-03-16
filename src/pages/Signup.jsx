import React, { useState } from 'react'
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config"
import { db } from "../firebase.config";

import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios  from "axios";

function Signup() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()


  // const signup = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)

  //   try {
  //     const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    
  //     const user = userCredentials.user

  //     //uploading file
  //     const metadata = {
  //       contentType: 'image/jpeg'
  //     };
  //     const storageRef = ref(storage, 'images/'+file.name)
  //     const uploadTask = uploadBytesResumable(storageRef, file,metadata)
      
  //     uploadTask.on((error) => {
  //       toast.error(error.message)
  //     }, () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //         //update user profile
  //         await updateProfile(user, {
  //           displayName: username,
  //           photoURL: downloadURL
  //         })

  //         //store use data in firestore
  //         await setDoc(doc(db, "users", user.uid), {
  //           uid: user.uid,
  //           displayName: username,
  //           email,
  //           photoURL: downloadURL
  //         })
  //       })
  //     }
  //   );

  //   setLoading(false)
  //   toast.success('account created')
  //   navigate('/login')
  //   } catch (error) {
  //     setLoading(false)
  //     toast.error(error.code)
  //   }

  // }


  const signup = async (e) => {
    e.preventDefault()
    try {

        const url = "http://localhost:8080/api/user"
        const { data: res } = await axios.post(url, {firstName,lastName,email,password})
        navigate('/login')
        console.log(res.message);
    } catch (error) {
        if (error.response && 
            error.response.status >= 400 && 
            error.response.status <= 500
            ){
              toast.error(error.response.data.message)
        }
    }

}



  return (
    <Helmet title={'Signup'}>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className="text-center"><h5>Loading.....</h5></Col>:
              <Col lg='6' className='m-auto text-center' >
              <h3 className='fw-bold fs-3'>Signup</h3>
              <Form className='auth__form ' onSubmit={signup}>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='enter your first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='enter your last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                {/* <FormGroup className='form__group'>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </FormGroup> */}

                <button className="buy__btn login__btn">Create Account</button>
              </Form>
              <p>Already have an account?{" "} <Link to='/login'>login to account</Link> </p>
            </Col>
}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup