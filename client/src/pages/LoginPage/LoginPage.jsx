import React from "react";

// Import styles
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <h2> Login </h2>
      <form>
        <input placeholder="email" type="email" name="email" />
        <input placeholder="password" type="password" name="password" />
      </form>
    </div>
  );
};

export default LoginPage;
