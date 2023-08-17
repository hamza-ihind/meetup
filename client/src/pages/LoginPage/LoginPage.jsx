import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../../hooks/useForm";

// Import styles
import "./LoginPage.scss";

const LoginPage = () => {
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="login">
      <h2> Login </h2>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={values.username}
          placeholder="username"
          type="text"
          name="username"
        />
        <input
          onChange={onChange}
          value={values.password}
          placeholder="password"
          type="password"
          name="password"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default LoginPage;
