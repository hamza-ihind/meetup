import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import useForm from "../../hooks/useForm";

// Import styles
import "./RegisterPage.scss";

const RegisterPage = () => {
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="register">
      <h2> Register </h2>
      <form onSubmit={onSubmit} noValidate>
        <input
          onChange={onChange}
          value={values.username}
          placeholder="username"
          type="text"
          name="username"
        />
        <input
          onChange={onChange}
          value={values.email}
          placeholder="email"
          type="email"
          name="email"
        />
        <input
          onChange={onChange}
          value={values.password}
          placeholder="password"
          type="password"
          name="password"
        />
        <input
          onChange={onChange}
          value={values.confirmPassword}
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default RegisterPage;
