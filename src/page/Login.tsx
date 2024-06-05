import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TextField from "@/components/fields/TextField";
import "./Login.css";

const Login: React.FC = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Save form data to console
      console.log("Form data:", formData);

      // Save form data to local storage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Reset form data
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-head">Emvive</h1>
      <h2 className="login-head-1">Login</h2>
      <Form
        className="min-w-[20rem] flex flex-col gap-3"
        onSubmit={handleSubmit}>
        <TextField
          label="Email address :"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e: any) =>
            setFormData({ ...formData, email: e.target.value })
          }
          error={errors.email}
        />{" "}
        <TextField
          label="password :"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e: any) =>
            setFormData({ ...formData, password: e.target.value })
          }
          error={errors.password}
        />{" "}
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
