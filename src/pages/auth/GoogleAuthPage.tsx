import React from "react";
import AuthSlider from "../../components/AuthSlider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MailImage from "@/assets/images/auth/mail-image.png"

const GoogleAuthPage: React.FC = () => {
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
          <h2 className="block text-2xl font-medium text-center mt-6 mb:mt-0 mb-2 lg:mb-6">
            Sign Up
          </h2>
          <h6 className="text-[14px] md:text-[17px] lg:text-[20px] font-medium text-[#738FA7] text-center">Access and view properties with Bellevivre Ltd all in one piece</h6>

        <div className="mt-12 grid gap-1 pb-14 md:pb-0">
        <div className="grid gap-4 md:gap-8">
          <Button className="bg-white border border-[#D4D4D4] hover:bg-transparent focus:bg-transparent text-black w-full flex items-center justify-center gap-2
          !rounded-xl tap-effect py-6">
            <img src="/googleIcon.png" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </Button>
          <Button className="bg-white border border-[#D4D4D4] hover:bg-transparent focus:bg-transparent text-black w-full flex items-center justify-center gap-2
          !rounded-xl tap-effect py-6">
            <img src={MailImage} alt="Mail" className="w-5 h-4" />
            Sign up with email
          </Button>
        </div>
            <p className="my-3 text-[14px] text-center font-medium">
                <span className="text-[#1C1C1CCC]">Already have an account? </span>
                <span className="text-[#1B1E69]">
                <Link to="/login">Log In</Link>
                </span>
            </p>

        </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuthPage;