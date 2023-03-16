import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../../../app/common/form/MyTextInput.common";
import MySubmitButton from "../../../app/common/form/MySubmitButton.common";
import "./signupForm.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { signupLoading } from "../../../app/stores/users/user.action";
import { selectUserError } from "../../../app/stores/users/user.selector";
import ValidationError from "../../errors/validationError/ValidationError.component";
import { userFormValidation } from "../../../app/utils/userFormValidation.util";

const SignupForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectUserError);

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
        onSubmit={(values) => {
          dispatch(signupLoading(values));
        }}
        validationSchema={userFormValidation}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
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

            {error && <ValidationError errors={error} />}

            <MySubmitButton
              disabled={!isValid || isSubmitting || !dirty}
              buttonType="signup-form"
              label="Sign Up"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
