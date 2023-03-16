import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import MySubmitButton from "../../../app/common/form/MySubmitButton.common";
import "./signupForm.styles.css";

const SignupForm = () => {
  return (
    <div className="signup-form__container">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form
            className="signup-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="signup-form__heading">
              <div className="signup-form__header">Sign Up</div>
            </div>
            <MyTextInput
              name="firstName"
              placeholder="First Name"
              formtype="signup-form"
              type="text"
              label="First Name"
            />
            <MyTextInput
              name="lastName"
              placeholder="Last Name"
              formtype="signup-form"
              type="text"
              label="Last Name"
            />
            <MyTextInput
              name="username"
              placeholder="Username"
              formtype="signup-form"
              type="text"
              label="Username"
            />
            <MyTextInput
              name="email"
              placeholder="Email"
              formtype="signup-form"
              type="email"
              label="Email"
            />
            <MyTextInput
              name="password"
              placeholder="Password"
              formtype="signup-form"
              type="password"
              label="Password"
            />

            <MySubmitButton buttonType="signup-form" label="Sign Up" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
