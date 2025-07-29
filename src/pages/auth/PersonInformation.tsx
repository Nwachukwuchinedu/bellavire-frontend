import AuthSlider from "@/components/AuthSlider";
import { DefaultInput } from "@/components/input/DefaultInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import uploadImg from "../../assets/images/auth/upload.png"
import { CheckCheck } from "lucide-react";

export default function PersonInformation() {
  const [file, setFile] = useState(null);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    postalCode: Yup.string().required("Postal Code is required"),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className="relative min-h-screen h-[100vh] flex flex-col lg:flex-row">
      {/* Mobile Slider */}
      <div className="absolute inset-0 block lg:hidden">
        <AuthSlider bottom={10} />
      </div>

      {/* Desktop Slider */}
      <div className="hidden lg:block lg:w-1/2">
        <AuthSlider bottom={10} />
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-16 lg:px-12">
        <div className="flex justify-center">
          <img
            src="/loginLogo.png"
            alt=""
            className="hidden lg:flex w-36 md:w-52"
          />
        </div>

        <Formik
          initialValues={{ address: "", postalCode: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Submitted:", values, file);
          }}
        >
          {(formik) => {
            const addressValid =
              formik.touched.address &&
              !formik.errors.address &&
              formik.values.address;

            const postalValid =
              formik.touched.postalCode &&
              !formik.errors.postalCode &&
              formik.values.postalCode;

            return (
              <form
                onSubmit={formik.handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-[24px] space-y-6 mt-[100px] lg:mt-[20px]"
              >
                <h2 className="text-2xl font-semibold text-center">
                  Personal Information
                </h2>

                {/* Address */}
                <div className="relative">
                  <DefaultInput
                    label="Address"
                    name="address"
                    formik={formik}
                  />
                  {addressValid && (
                    <div className="absolute right-3 top-9">
                      <CheckCheck className="text-black w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Postal Code */}
                <div className="relative">
                  <DefaultInput
                    label="Postal Code"
                    name="postalCode"
                    formik={formik}
                  />
                  {postalValid && (
                    <div className="absolute right-3 top-9">
                      <CheckCheck className="text-black w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* File Upload Box */}
                <div className="w-full border-2 border-gray-400 rounded-md p-6 text-center">
                  <label
                    htmlFor="fileUpload"
                    className="cursor-pointer inline-block"
                  >
                    <div className="flex justify-center">
                      <Button
                        type="button"
                        className="bg-[#1a71f6] hover:bg-[#1558c4] text-white text-sm"
                      >
                        <img src={uploadImg} alt="" />
                        Upload File
                      </Button>
                    </div>
                    <input
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {file && (
                    <p className="text-sm text-gray-600 mt-2">
                      Selected: {file.name}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full p-3 text-white text-base rounded-md bg-[#1a71f6] hover:bg-[#1558c4]"
                >
                  Create My Account
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
