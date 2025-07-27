import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DefaultInput } from "@/components/input/DefaultInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InputOTP } from "@/components/ui/input-otp";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const emailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNavigateSteps = (values) => {
    setStep((prev) => prev + 1);
    setEmail(values.email);
    step === 3 && handleNavigateToRegister();
  };
  const handleNavigateToRegister = () => {
    navigate("/login");
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
              onSubmit={(values) => {
                console.log("Submitted values:", values);
                handleNavigateSteps(values);
              }}
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

        {/* {step === 2 && (
          <div className="flex flex-col items-center gap-4">
            <img src="/loginLogoWhite.png" alt="" className="block lg:hidden" />
            <img src="/loginLogo.png" alt="" className="hidden lg:block" />
            <h2 className="hidden lg:block mb-6 text-xl text-center font-semibold">
              Retrieve Password
            </h2>

            <p>Enter the six digit code that was sent to <span className="font-semibold">{email}</span></p>

            <InputOTP type="text" />
          </div>
        )} */}
        {step === 2 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <img src="/loginLogoWhite.png" alt="" className="block lg:hidden" />
            <img src="/loginLogo.png" alt="" className="hidden lg:block" />
            <h2 className="hidden lg:block mb-6 text-xl text-center font-semibold">
              Retrieve Password
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
