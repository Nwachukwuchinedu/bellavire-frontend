import React from "react";
import AuthSlider from "../../components/AuthSlider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MailImage from "@/assets/images/auth/mail-image.png"
import * as Yup from "yup";
import { DefaultInput } from "@/components/input/DefaultInput";
import { Formik } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCountdown } from "@/lib/useCountDown";
import { useNavigate } from "react-router-dom";

const VerifyEmailAddressPage: React.FC = () => {
  const navigate = useNavigate()
const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d{6}$/, "OTP must be digits only")
    .required("OTP is required"),
});

const { isComplete, formattedTime } = useCountdown(
    60,
    null,
    true
);

function navigateToNextPage() {
  navigate("/dashboard")
}
const navigateToNextPageOne = () => {
  navigate("/auth/login")
}

// const navigateToPrevPage = {
//   navigate("/auth/login")
// }

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
              alt=""
              className="hidden lg:flex  w-36 md:w-52 "
            />
          </div>
          <h2 className="block text-xl font-medium text-center mb:mt-6 mb:mt-0 mb-2 lg:mb-6">
            Verify email address
          </h2>
          <h6 className="text-[14px] md:text-[17px] lg:text-[20px]  text-black text-start">
            <span className="font-light">Enter the six digit code sent to your</span>
            <br />
            <span className="font-normal">email address</span>
          </h6>

                    <Formik
            initialValues={{ otp: "" }}
            validationSchema={otpSchema}
            onSubmit={(values) => {
              console.log("Submitted values:", values);
              // Handle login here
            }}
          >
            {(formik) => (
              <form
                className="flex flex-col justify-center w-full"
                onSubmit={formik.handleSubmit}
              >
                <div className="mt-6 gap-5 lg:gap-8 lg:mt-12 flex flex-col">
                  <DefaultInput
                    name="otp"
                    label="OTP Code"
                    value={`${formik.values.otp.slice(0, 3)} {" "}- ${formik.values.otp.slice(3, 6)}`}
                    type="text"
                    placeholder="--- ---"
                    formik={formik}
                    onChange={formik.handleChange}
                  />
                                    {/* <Label className="text-[#5f5f5f] text-sm">OTP Code</Label>
                  <Input
                  className="!ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:!outline-none"
                    name="otp"
                    type="text"
                    inputMode="numeric"
                    placeholder="123-456"
                    maxLength={7}
                    value={
                        formik.values.otp.length > 3
                        ? `${formik.values.otp.slice(0, 3)}-${formik.values.otp.slice(3)}`
                        : formik.values.otp
                    }
                    onChange={(e) => {
                        const raw = e.target.value.replace(/\D/g, ""); // only digits
                        const trimmed = raw.slice(0, 6); // max 6 digits
                        formik.setFieldValue("otp", trimmed);
                    }}
                    /> */}

                  <p className="flex justify-end text-xs gap-2 text-[#1E1E1E]">
                    Resend code in{" "}
                    {isComplete ? (
                      <span className="text-gray-500">00:00</span>
                    ) : (
                      <span className="text-blue-500">{formattedTime.formatted}</span>
                    )}
                  </p>
                <Button onClick={navigateToNextPage} className=" border-[#D4D4D4]  tap-effect text-white w-full flex items-center justify-center gap-2
                !rounded-lg tap-effect py-6 font-normal text-[14px] lg:text-[20px]">
                    Verify email address
                </Button>
                </div>


              </form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default VerifyEmailAddressPage;