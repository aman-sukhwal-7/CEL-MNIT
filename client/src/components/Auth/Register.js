import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Container,
  Sidebar,
  FormContainer,
  Input,
  Button,
  Title,
} from "./AuthStyles";
import { isAuth } from "./Helpers";

const Register = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerFormHandler = async (e) => {
    e.preventDefault();
    let registerData = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };
    console.log(registerData);
    // const isValid = await registerSchema.isValid(registerData);
    // if (isValid) {
    //   console.log(registerData, "Register data");
    //   axios
    //     .post(`${appConstant.baseURL}/register`, registerData)
    //     .then((res) => {
    //       console.log(res);
    //       message.success(res.data.message);
    //     })
    //     .catch((error) => {
    //       message.error(error.response.data.error);
    //     });
    // } else {
    //   message.error("Check Details Again!");
    // }
    // setRegisterEmail("");
    // setRegisterPassword("");
    // setRegisterName("");
  };
  return (
    <>
      <Container>
        <Sidebar />
        <FormContainer>
          <Title>Register</Title>
          <Input
            type="text"
            placeholder="Name..."
            onChange={(e) => setRegisterName(e.target.value)}
            value={registerName}
          />
          <Input
            type="email"
            placeholder="Email..."
            onChange={(e) => setRegisterEmail(e.target.value)}
            value={registerEmail}
          />
          <Input
            type="password"
            placeholder="Password..."
            onChange={(e) => setRegisterPassword(e.target.value)}
            value={registerPassword}
          />
          <Button onClick={registerFormHandler}>SignUp</Button>
          <div className="signup_link">
            Already a member?
            <Link to="/login">Login</Link>
          </div>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
