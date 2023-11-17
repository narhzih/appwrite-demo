import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/Form";
import { FormLabel } from "../../components/form/FormLabel";
import { FormInput } from "../../components/form/FormInput";
import { toast } from "react-toastify";
import { account } from "../../lib/appwrite";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast("Please provide a valid email and password", {
        type: "error",
      });
      return;
    }
    try {
      // const respnose = await account.create(ID.unique(), email, password);
      const respnose = await account.createEmailSession(email, password);
      toast("Login successful! You'll be redirected shortly!", {
        type: "success",
      });
      console.log("response ->", respnose);
    } catch (e: any) {
      toast(`Something went wrong:  ${e.message}`, { type: "error" });
    }
  };
  return (
    <Form
      formTitle="Login to your Account"
      onSubmit={handleSubmit}
      buttonText="Login"
    >
      <div>
        <FormLabel htmlFor="email" labelTitle="Email"></FormLabel>
        <FormInput
          inputType="email"
          placeholder="name@company.com"
          value={email}
          setValue={setEmail}
        ></FormInput>
      </div>
      <div>
        <FormLabel htmlFor="password" labelTitle="Password"></FormLabel>
        <FormInput
          inputType="password"
          placeholder="Enter your secret"
          value={password}
          setValue={setPassword}
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
