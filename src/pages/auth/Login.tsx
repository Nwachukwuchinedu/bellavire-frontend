import React, { useState } from "react";
import AuthSlider from "../../components/AuthSlider";
import Warning from "@/assets/icons/warning.svg";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { DefaultInput } from "@/components/input/DefaultInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "@/stores/authStore";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const [error, setError] = useState("");

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one capital letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
  });

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/google`;
  };

  return (
    <div className="relative min-h-screen h-[100vh] flex flex-col lg:flex-row">
      <div className="absolute inset-0 block lg:hidden">
        <AuthSlider bottom={10} />
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <AuthSlider bottom={10} />
      </div>

      <div className="relative z-20 w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-[150px] lg:pt-[50px]">
        <div className="bg-white rounded-[24px] lg:bg-transparent p-6 lg:p-2 w-full max-w-md">
          <div className="flex justify-center">
            <img
              src="/loginLogo.png"
              alt="Login Logo"
              className="hidden lg:flex w-36 md:w-52"
            />
          </div>
          <h2 className="hidden lg:block text-2xl font-bold text-center mt-0 mb-2 lg:mb-6">
            Sign In
          </h2>

          {error && (
            <div role="alert" className="text-red-500 text-sm mb-4 text-center">
              {error}
            </div>
          )}

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
              try {
                setError("");
                await login(values.email, values.password);
                navigate("/dashboard"); // Redirect after successful login
              } catch (err: any) {
                setError(err.message || "Invalid credentials");
              }
            }}
          >
            {(formik) => (
              <form
                className="space-y-4 flex flex-col justify-center w-full"
                onSubmit={formik.handleSubmit}
                noValidate
              >
                <DefaultInput
                  name="email"
                  label="Email Address"
                  value={formik.values.email}
                  type="email"
                  placeholder="you@example.com"
                  formik={formik}
                  onChange={formik.handleChange}
                />

                <div className="flex flex-col gap-1">
                  <DefaultInput
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    type="password"
                    placeholder="Enter your password"
                    formik={formik}
                    mask={true}
                    onChange={formik.handleChange}
                  />

                  <p className="flex text-xs gap-2 text-[#1E1E1E]">
                    <img src={Warning} className="w-4 h-4" alt="Warning icon" />
                    The password should contain more than eight characters,
                    including a capital letter, a number, and a special
                    character.
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <label
                    htmlFor="rememberMe"
                    className="text-[#5f5f5f] flex items-center gap-1 cursor-pointer"
                  >
                    <input id="rememberMe" type="checkbox" name="rememberMe" />
                    <span className="text-sm">Remember me</span>
                  </label>

                  <Link
                    to="/auth/forgot-password"
                    className="text-[#1b1e69] font-semibold text-sm"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={
                    !formik.values.email ||
                    !formik.values.password ||
                    isLoading
                  }
                  className="w-full p-[14px] text-white text-lg rounded-[4px] bg-[#5a86ff] hover:bg-[#1B1E69] disabled:bg-[#afb2b6] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <Link
                  to="/auth/initiate-register"
                  className="text-center text-sm mt-1 block"
                >
                  Don't have an account?{" "}
                  <span className="text-[#5a86ff] font-semibold">Create Account</span>
                </Link>
              </form>
            )}
          </Formik>

          {/* Google Login Button outside form to avoid submit */}
          <Button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-4 p-[14px] bg-white border-2 border-black hover:bg-transparent focus:bg-transparent text-black w-full flex items-center justify-center gap-2"
          >
            <img src="/googleIcon.png" alt="Google logo" className="w-5 h-5" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
