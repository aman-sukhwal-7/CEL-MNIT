import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Sidebar,
  FormContainer,
  Input,
  Button,
  Title,
} from "./AuthStyles";
import { Link } from "react-router-dom";
import { isAuth } from "./Helpers";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginFormHandler = async (e) => {
    e.preventDefault();
    let loginData = {
      email: loginEmail,
      password: loginPassword,
    };
    console.log(loginData);
    // const isValid = await loginSchema.isValid(loginData);
    // if (isValid) {
    //   axios
    //     .post(`${appConstant.baseURL}/login`, loginData)
    //     .then((res) => {
    //       console.log(res);
    //       authenticate(res, () => {
    //         setLoginEmail("");
    //         setLoginPassword("");
    //         message.success(`Hey ${res.data.user.name}, Welcome Back!`);
    //       });
    //       //save info and token to localstorage/cookie
    //     })
    //     .catch((error) => {
    //       message.error(error.response.data.error);
    //     });
    // } else {
    //   message.error("Check Details Again!");
    // }
  };
  return (
    <>
      <Container>
        <Sidebar />
        <FormContainer>
          <Title>Login</Title>
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setLoginPassword(e.target.value)}
            value={loginPassword}
          />
          <a className="forgot" href="www.facebook.com">
            Forgot Password?
          </a>
          <Button onClick={loginFormHandler}>Login</Button>
          <div className="signup_link">
            Not a member?
            <Link to="/register">Signup</Link>
          </div>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
