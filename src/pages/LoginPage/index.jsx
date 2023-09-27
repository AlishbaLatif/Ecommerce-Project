import React, { useState } from "react";
import { useContext } from "react";
import { UserStatusContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { onAuthStateChanged } from "firebase/auth";
import "./styles.css";
// import { auth } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const loginNavigate = useNavigate();

  const defaultValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const handleSubmit = async (values) => {
    try {
      // const auth = getAuth();
      const user = await signInWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password
      );
      setLoggedIn(!isLoggedIn);
      loginNavigate("/");
    } catch (error) {
      // const errorcode = error.code;
      alert(error.code);
    }
  };

  const navigate = useNavigate();
  const { isLoggedIn, setLoggedIn } = useContext(UserStatusContext);
  return (
    <>
      <div className="loginContainer">
        <div className="col-md-3 text-center login-box-shadow  pt-4 pb-4">
          <h2>Login</h2>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="fieldContainer">
                <div className="col-md-10 ">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter User Email"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className="col-md-10">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className="form-control"
                  />
                  <p className="text-danger">
                    <ErrorMessage name="password" />
                  </p>
                </div>
                <div className="col-md-10">
                  <button
                    className="btn btn-primary col-md-12"
                    type="submit"
                    // onClick={() => {
                    //   setLoggedIn(!isLoggedIn);
                    // }}
                  >
                    Login
                  </button>
                </div>
                <label className="mt-2">
                  Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
                </label>
                <br />
                <label>OR</label>
                <div className="col-md-10 pb-3">
                  <button className="btn btnColor col-md-12">
                    <GrFacebook />
                    Login With Facbook
                  </button>
                </div>
                <div className="col-md-10 border">
                  <button className="btn  col-md-12">
                    <FcGoogle />
                    Login With Google
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
