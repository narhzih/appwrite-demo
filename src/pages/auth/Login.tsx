import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/Form";
import { FormLabel } from "../../components/form/FormLabel";
import { FormInput } from "../../components/form/FormInput";

export const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Form
      formTitle="Login to your Account"
      onSubmit={handleSubmit}
      buttonText="Login"
    >
      <div>
        <FormLabel htmlFor="email" labelTitle="Email"></FormLabel>
        <FormInput inputType="email" placeholder="name@company.com"></FormInput>
      </div>
      <div>
        <FormLabel htmlFor="password" labelTitle="Password"></FormLabel>
        <FormInput
          inputType="password"
          placeholder="Enter your secret"
        ></FormInput>
      </div>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Register
        </Link>
      </p>
    </Form>
  );
};
