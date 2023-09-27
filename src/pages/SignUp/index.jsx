import React, { useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { Auth } from 'firebase/auth';
import { auth } from '../../firebase-config';
import {CiFacebook} from 'react-icons/ci'
import {FcGoogle} from 'react-icons/fc'
import './styles.css'

import * as yup from 'yup'

const SignUp = () => {
  const signUpbtnNavigate = useNavigate();


  const defaultValue ={
    name : "",
    email: "",
    contact: "",
    password : "",
    confirm : "",
  }
  const validationSchema =yup.object().shape({
    name : yup.string().required(),
    email : yup.string().required(),
    contact : yup.string().required(),
    password : yup.string().required(),
    confirm : yup.string().required("Confirm Password"),

  })
  const handleSubmit = async(values) =>{

  const user = await createUserWithEmailAndPassword(auth,values.email,values.password,values.contact);
    signUpbtnNavigate('/loginPage')
  }
  
  return (
    <div className='mainContainer'>
        <div className='col-md-4 text-center box-shadow pt-4 pb-4 '>
        <h2 className='h2'>Signup</h2>
       
      <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className='fieldContainer'>
        <div className="col-md-10  ">
        <Field type = "text" name = "name" placeholder = "Enter Your Name"  className ="form-control" />
        <p className="text-danger">
          <ErrorMessage name="name" />
        </p>

        </div>
        <div className="col-md-10 ">
        <Field type = "email" name = "email" placeholder = "Enter Your Email" className ="form-control" />
        <p className="text-danger">
          <ErrorMessage name="email" />
        </p>

        </div>
        <div className="col-md-10 ">
        <Field type = "text" name = "contact" placeholder = "Enter Your Contact" className ="form-control"/>
        <p className="text-danger">
          <ErrorMessage name="contact" />
        </p>

        </div>
        <div className="col-md-10 ">
        <Field type = "password" name = "password" placeholder = "Enter Your Password" className ="form-control"/>
        <p className="text-danger">
          <ErrorMessage name="password" />
        </p>
        </div>
        <div className="col-md-10 ">
        <Field type = "password" name = "confirm" placeholder = "Confirm Password" className ="form-control"/>
        <p className="text-danger">
          <ErrorMessage name="confirm" />
        </p>
        </div>
        <div className='col-md-10'>
          <button className='btn btn-primary col-md-12' type='submit'>Sign Up</button>

          </div>
          <label className="mt-2">Already have an account? <NavLink to = "/loginPage">Sign In</NavLink></label>
        <br /><label>OR</label>
        <div className="col-md-10 pb-3">
        <button className="btn btnColor col-md-12"><CiFacebook/>Login With Facbook</button>
        </div>
        <div className="col-md-10 border">
        <button className="btn  col-md-12"><FcGoogle/>Login With Google</button>
        </div>
        </div>

        

      </Form>

      </Formik>
   

      
    </div>
    </div>
  )
}

export default SignUp;
