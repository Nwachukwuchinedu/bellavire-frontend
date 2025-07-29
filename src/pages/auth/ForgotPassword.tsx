import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DefaultInput } from "@/components/input/DefaultInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Warning from "../../assets/icons/warning.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { CheckCheck } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: any;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const emailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const otpSchema = Yup.object().shape({
    otp: Yup.string()
      .required("OTP is required")
      .matches(/^\d{3}-\d{3}$/, "OTP must be in the format 123-456"),
  });

  const handleNavigateSteps = (values) => {
    setStep((prev) => prev + 1);
    setEmail(values.email);
  };

  return (
    <div className="relative h-[100vh] flex flex-col lg:flex-row overflow-hidden">
      <div className="absolute inset-0 block lg:hidden">
        <img src="/forgotPasswordImg.png" alt="" />
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img src="/forgotPasswordImg.png" alt="" />
      </div>

      <div className="relative z-20 w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-[150px] lg:pt-[50px]">
        {step === 1 && (
          <div className="flex flex-col items-center gap-4">
            <img src="/loginLogoWhite.png" alt="" className="block lg:hidden" />
            <img src="/loginLogo.png" alt="" className="hidden lg:block" />
            <h2 className="hidden lg:block mb-6 text-xl text-center font-semibold">
              Retrieve Password
            </h2>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={emailSchema}
              onSubmit={handleNavigateSteps}
            >
              {(formik) => (
                <form
                  className="space-y-4 bg-white py-14 px-6 lg:p-4 rounded-[24px] min-w-[300px] flex flex-col justify-center w-full"
                  onSubmit={formik.handleSubmit}
                >
                  <h1 className="text-2xl lg:text-3xl">
                    Enter your Email Address
                  </h1>
                  <DefaultInput
                    name="email"
                    label="Email Address"
                    value={formik.values.email}
                    type="email"
                    placeholder="you@example.com"
                    formik={formik}
                    onChange={formik.handleChange}
                  />

                  <Button
                    type="submit"
                    disabled={!formik.values.email}
                    className="w-full p-[14px] text-white text-lg rounded-[4px] bg-[#5a86ff] hover:bg-[#1B1E69] disabled:bg-[#afb2b6] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Retrieve Password
                  </Button>

                  <Link
                    to="/initiate-register"
                    className="text-center text-sm mt-1"
                  >
                    Don't have an account?{" "}
                    <span className="text-[#5a86ff] font-semibold">
                      Get Started
                    </span>
                  </Link>
                </form>
              )}
            </Formik>
          </div>
        )}
        {step === 2 && (
          <Formik
            initialValues={{ otp: "" }}
            validationSchema={otpSchema}
            onSubmit={(values) => {
              console.log("OTP submitted:", values.otp);
              setStep(3);
            }}
          >
            {(formik) => {
              const isValid = /^\d{3}-\d{3}$/.test(formik.values.otp);
              const isTouchedAndError = formik.touched.otp && formik.errors.otp;

              return (
                <div className="flex flex-col items-center">
                  <img
                    src="/loginLogoWhite.png"
                    alt=""
                    className="block lg:hidden w-34 h-34"
                  />
                  <img
                    src="/loginLogo.png"
                    alt=""
                    className="hidden lg:block w-80"
                  />
                  <h2 className="hidden lg:block mb-6 text-xl text-center font-semibold">
                    Retrieve Password
                  </h2>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col items-center gap-4 w-full bg-white px-4 py-10 justify-center rounded-[24px] mt-[50px] lg:mt-[10px]"
                  >
                    <p className="text-left">
                      Enter the six digit code that was sent to{" "}
                      <span className="font-semibold">{email}</span>
                    </p>

                    <div className="relative w-full max-w-md">
                      <input
                        type="text"
                        name="otp"
                        placeholder="980-345"
                        maxLength={7}
                        value={formik.values.otp}
                        onChange={(e) => {
                          const raw = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 6);
                          const formatted =
                            raw.length > 3
                              ? `${raw.slice(0, 3)}-${raw.slice(3)}`
                              : raw;
                          formik.setFieldValue("otp", formatted);
                          setOtp(raw);
                        }}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-3 pr-10 border-2 rounded-lg text-lg font-medium tracking-widest bg-white focus:outline-none ${
                          isTouchedAndError
                            ? "border-red-500 focus:border-red-500"
                            : isValid
                            ? "border-green-500 focus:border-green-500"
                            : "border-gray-300 focus:border-blue-400"
                        }`}
                      />

                      {isValid && (
                        <div className="absolute inset-y-0 right-4 flex items-center">
                          <CheckCheck className="text-black w-5 h-5" />
                        </div>
                      )}
                    </div>

                    <div className="flex w-full max-w-xs justify-end">
                      <div className="text-sm text-gray-600 -mt-2">
                        Resend Code:{" "}
                        <span className="font-semibold text-black">
                          00 : {timer < 10 ? `0${timer}` : timer}
                        </span>
                      </div>
                    </div>
                    {/* Error Message */}
                    {formik.touched.otp && formik.errors.otp && (
                      <div className="text-sm text-red-500">
                        {formik.errors.otp}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="bg-[#1a71f6] text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-[#1558c4] transition w-full max-w-md"
                    >
                      Retrieve Password
                    </Button>
                  </form>
                </div>
              );
            }}
          </Formik>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center">
            {/* Logos - stay outside Formik */}
            <img
              src="/loginLogoWhite.png"
              alt=""
              className="block lg:hidden w-34 h-34"
            />
            <img src="/loginLogo.png" alt="" className="hidden lg:block w-80" />

            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object().shape({
                password: Yup.string()
                  .required("Password is required")
                  .min(8, "Password must be at least 8 characters")
                  .matches(/[A-Z]/, "Must contain an uppercase letter")
                  .matches(/[0-9]/, "Must contain a number")
                  .matches(/[!@#$%^&*]/, "Must contain a special character"),
                confirmPassword: Yup.string()
                  .required("Please confirm your password")
                  .oneOf([Yup.ref("password")], "Passwords must match"),
              })}
              onSubmit={(values) => {
                console.log("Password updated:", values.password);
                navigate("/dashboard"); // Or go to next step
              }}
            >
              {(formik) => {
                const passwordsMatch =
                  formik.touched.confirmPassword &&
                  formik.values.confirmPassword === formik.values.password &&
                  !formik.errors.confirmPassword;

                return (
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col items-center gap-4 w-full bg-white px-4 py-10 justify-center rounded-[24px] mt-[50px] lg:mt-[10px]"
                  >
                    <p className="text-left text-lg lg:text-xl w-full max-w-md">
                      Enter your New Password
                    </p>

                    {/* Password Field */}
                    <div className="relative w-full max-w-md">
                      <DefaultInput
                        formik={formik}
                        label="Password"
                        name="password"
                        type="password"
                        mask={true}
                      />
                      <div className="flex items-start gap-1 mt-1">
                        <img src={Warning} className="w-4 h-4" alt="warning" />
                        <p className="text-[12px] text-[#1e1e1e] leading-snug">
                          The password should contain more than eight
                          characters, including an uppercase letter, a number,
                          and a special character.
                        </p>
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative w-full max-w-md">
                      <DefaultInput
                        formik={formik}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        mask={true}
                      />

                      {passwordsMatch && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600">
                          <CheckCheck className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="bg-[#1a71f6] text-white cursor-pointer px-6 py-3 rounded-md text-base font-semibold hover:bg-[#1558c4] transition w-full max-w-md"
                    >
                      Sign In
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}
