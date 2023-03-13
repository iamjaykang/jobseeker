import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import MySubmitButton from "../../../app/common/form/MySubmitButton.common";
import "./loginForm.styles.css";

const LoginForm = () => {
  return (
    <div className="login-form__container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form
            className="login-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="login-form__heading">
              <div className="login-form__header">Login</div>
            </div>
            <MyTextInput
              name="email"
              placeholder="Email"
              formtype="login-form"
              type="email"
              label="Email"
            />
            <MyTextInput
              name="password"
              placeholder="Password"
              formtype="login-form"
              type="password"
              label="Password"
            />

            <MySubmitButton buttonType="login-form" label="Login" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
