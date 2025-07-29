// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuthStore, UserRole } from "@/stores/authStore";
// import { Button } from "@/components/ui/button";
// // import BackgroundCarousel from "@/components/auth/BackgroundCarousel";
// import { DefaultInput } from "@/components/input/DefaultInput";
// import { LockKeyhole } from "lucide-react";
// import Logo from "@/assets/images/logo.png";
// import Warning from "@/assets/icons/warning.svg";
// import Google from "@/assets/icons/google.svg";
// import AuthSlider from "@/components/AuthSlider";
// import * as Yup from "yup";
// import { Formik } from "formik";
// const Register = () => {
//   const { login, selectedRole } = useAuthStore();
//    const registerSchema = Yup.object().shape({
//     organizationName: Yup.string().min(2, "Organization Name must be at least 2 characters").required("Organization Name is required"),
//     firstName: Yup.string().min(2, "First Name must be at least 2 characters").required("First Name is required"),
//     lastName: Yup.string().min(2, "Last Name must be at least 2 characters").required("Last Name is required"),
//     phone: Yup.string().length(10, "Phone number must be exactly 10 digits").required("Please provide a valid phone number"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters")
//       .matches(/[A-Z]/, "Password must contain at least one capital letter")
//       .matches(/[0-9]/, "Password must contain at least one number")
//       .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const type = queryParams.get("type");

//   const [formData, setFormData] = useState({
//     organizationName: "",
//     Phone: "",
//     name: "",
//     email: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//     confirmPassword: "",
//     role: selectedRole,
//   });

//   const navigate = useNavigate();

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Mock registration - replace with actual authentication
//     const newUser = {
//       id: Date.now().toString(),
//       email: formData.email,
//       name: formData.name,
//       role: formData.role,
//     };
//     const newOrganization = {
//       id: Date.now().toString(),
//       email: formData.email,
//       name: formData.organizationName,
//       role: formData.role,
//     };

//     login(newUser);
//     navigate("/auth/verify-email");
//   };

//   const handleGoogleLogin = () => {
//     navigate("/auth/google-auth");
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col lg:flex-row">
//       {/* Mobile slider */}
//       <div className="absolute inset-0 block lg:hidden z-0">
//         <AuthSlider bottom={40} />
//       </div>

//       {/* Desktop slider */}
//       <div className="hidden lg:block lg:w-1/2 z-0">
//         <AuthSlider bottom={40} />
//       </div>

//       {/* Form container */}
//       <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-[100px] mt-12">
//         <div className="bg-white rounded-[24px] lg:bg-transparent p-6 lg:p-2 w-full max-w-md">
//           <div className="flex flex-col items-center justify-center mb-6">
//             <img src={Logo} alt="logo" className="hidden lg:flex w-36 md:w-52" />
//             <h2 className="mt-4 text-[#1e1e1e] font-semibold text-[17px] md:text-[24px] leading-[19px]">
//               Create an Account
//             </h2>
//           </div>
//           <Formik
//             initialValues={formData}
//             validationSchema={registerSchema}
//             onSubmit={(values) => {
//               const newUser = {
//                 id: Date.now().toString(),
//                 email: values.email,
//                 name: type === "organization" ? values.organizationName : `${values.firstName} ${values.lastName}`,
//                 role: selectedRole ?? "tenant", // fallback to tenant if not set
//               };

//               login(newUser);
//               navigate("/dashboard");
//             }}
//           >
//             {(formik) => (
//               <form onSubmit={formik.handleSubmit}>
//                 <div className="flex flex-col gap-4">
//                   {type === "organization" && (
//                     <>
//                       <DefaultInput
//                         value={formik.values.organizationName}
//                         label="Organization Name"
//                         name="organizationName"
//                         placeholder=" "
//                         formik={formik}
//                         onChange={formik.handleChange}
//                         required
//                       />
//                     </>
//                   )}

//                   {type === "individual" && (
//                     <>
//                       <DefaultInput
//                         value={formik.values.firstName}
//                         label="First Name"
//                         name="firstName"
//                         placeholder=" "
//                         formik={formik}
//                         onChange={formik.handleChange}
//                       required
//                     />
//                     <DefaultInput
//                         value={formik.values.lastName}
//                         label="Last Name"
//                         name="lastName"
//                         placeholder=" "
//                         formik={formik}
//                         onChange={formik.handleChange}
//                         required />
//                     </>
//                   )}

//                   <DefaultInput
//                     name="email"
//                     label="Email Address"
//                     value={formik.values.email}
//                     type="email"
//                     placeholder="you@example.com"
//                     formik={formik}
//                     onChange={formik.handleChange}
//                   />

//                   <DefaultInput
//                     value={formData.Phone}
//                     label="Phone Number"
//                     name="phone"
//                     placeholder=" "
//                     type="text"
//                     formik={formik}
//                     onChange={formik.handleChange}
//                     required
//                   />

//                   <div>
//                     <DefaultInput
//                       value={formik.values.password}
//                       leftIcon={<LockKeyhole className="size-4 text-gray-300" />}
//                       label="Password"
//                       name="password"
//                       type="password"
//                       placeholder=" "
//                       formik={formik}
//                       onChange={formik.handleChange}
//                       required
//                       mask={true}
//                     />
//                     <div className="flex items-start gap-0.5 mt-1">
//                       <img src={Warning} className="w-4 h-4" alt="warning" />
//                       <p className="font-light text-[11px] md:text-[14px] leading-[100%] text-[#1e1e1e]">
//                         The password should contain more than eight characters,
//                         including a caplocks, a number and a special character.
//                       </p>
//                     </div>
//                   </div>

//                   <DefaultInput
//                   value={formik.values.confirmPassword}
//                     leftIcon={<LockKeyhole className="size-4 text-gray-300" />}
//                     type="password"
//                     placeholder="Confirm password"
//                     className="placeholder:text-gray-300"
//                     label="Confirm Password"
//                     name="confirmPassword"
//                     formik={formik}
//                     onChange={formik.handleChange}
//                     required
//                     mask={true}
//                   />

//                   <div className="grid gap-2">
//                     <Button
//                       type="submit"
//                       onClick={handleRegister}
//                       className="w-full bg-[#AFB2B6] border-2 border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-white transition duration-500"
//                     >
//                       Register
//                     </Button>
//                     <p className="my-3 text-[14px] text-center font-medium">
//                       <span className="text-[#1C1C1CCC]">Already have an account? </span>
//                       <span className="text-[#1B1E69]">
//                         <Link to="/login">Sign In</Link>
//                       </span>
//                     </p>
//                     <Button
//                       type="button"
//                       onClick={handleGoogleLogin}
//                       className="w-full bg-white border border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-black hover:text-white transition duration-500 flex items-center justify-center gap-2"
//                     >
//                       <img src={Google} alt="Google" className="w-5 h-5" />
//                       Continue with Google
//                     </Button>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { Button } from "@/components/ui/button";
import { DefaultInput } from "@/components/input/DefaultInput";
import { LockKeyhole } from "lucide-react";
import Logo from "@/assets/images/logo.png";
import Warning from "@/assets/icons/warning.svg";
import Google from "@/assets/icons/google.svg";
import AuthSlider from "@/components/AuthSlider";
import * as Yup from "yup";
import { Formik } from "formik";

const Register = () => {
  const { login, selectedRole } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const registerSchema = Yup.object().shape({
    organizationName: Yup.string()
      .min(2, "Organization Name must be at least 2 characters")
      .when([], {
        is: () => type === "organization",
        then: (schema) => schema.required("Organization Name is required"),
      }),
    firstName: Yup.string()
      .min(2, "First Name must be at least 2 characters")
      .when([], {
        is: () => type === "individual",
        then: (schema) => schema.required("First Name is required"),
      }),
    lastName: Yup.string()
      .min(2, "Last Name must be at least 2 characters")
      .when([], {
        is: () => type === "individual",
        then: (schema) => schema.required("Last Name is required"),
      }),
    phone: Yup.string()
      .length(10, "Phone number must be exactly 10 digits")
      .required("Please provide a valid phone number"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleGoogleLogin = () => {
    navigate("/auth/google-auth");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden relative">
      {/* Left side: Background slider - now fixed */}
      <div className="hidden lg:flex w-1/2 fixed left-0 top-0 h-full">
        <AuthSlider bottom={40} />
      </div>

      {/* Right side: Registration form - with margin to account for fixed left side */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] flex items-center justify-center px-2 py-4 lg:px-4">
        <div className="bg-white rounded-[24px] w-full max-w-md p-6 shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <img src={Logo} alt="logo" className="w-36 md:w-52" />
            <h2 className="mt-4 text-[#1e1e1e] font-semibold text-[17px] md:text-[24px] leading-[19px]">
              Create an Account
            </h2>
          </div>

          <Formik
            initialValues={{
              organizationName: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              const name =
                type === "organization"
                  ? values.organizationName
                  : `${values.firstName} ${values.lastName}`;

              const newUser = {
                id: Date.now().toString(),
                email: values.email,
                name,
                role: selectedRole ?? "tenant",
              };

              login(newUser);
              navigate("/dashboard");
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-4">
                  {type === "organization" && (
                    <DefaultInput
                      name="organizationName"
                      label="Organization Name"
                      placeholder=" "
                      value={formik.values.organizationName}
                      formik={formik}
                      onChange={formik.handleChange}
                      required
                    />
                  )}

                  {type === "individual" && (
                    <>
                      <DefaultInput
                        name="firstName"
                        label="First Name"
                        placeholder=" "
                        value={formik.values.firstName}
                        formik={formik}
                        onChange={formik.handleChange}
                        required
                      />
                      <DefaultInput
                        name="lastName"
                        label="Last Name"
                        placeholder=" "
                        value={formik.values.lastName}
                        formik={formik}
                        onChange={formik.handleChange}
                        required
                      />
                    </>
                  )}

                  <DefaultInput
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={formik.values.email}
                    formik={formik}
                    onChange={formik.handleChange}
                    required
                  />

                  <DefaultInput
                    name="phone"
                    label="Phone Number"
                    placeholder=" "
                    type="text"
                    value={formik.values.phone}
                    formik={formik}
                    onChange={formik.handleChange}
                    required
                  />

                  <div>
                    <DefaultInput
                      name="password"
                      label="Password"
                      type="password"
                      placeholder=" "
                      leftIcon={
                        <LockKeyhole className="size-4 text-gray-300" />
                      }
                      value={formik.values.password}
                      formik={formik}
                      onChange={formik.handleChange}
                      mask
                      required
                    />
                    <div className="flex items-start gap-1 mt-1">
                      <img src={Warning} className="w-4 h-4" alt="warning" />
                      <p className="text-xs md:text-sm text-[#1e1e1e]">
                        The password should contain more than eight characters,
                        including a capital letter, a number and a special
                        character.
                      </p>
                    </div>
                  </div>

                  <DefaultInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm password"
                    className="placeholder:text-gray-300"
                    leftIcon={<LockKeyhole className="size-4 text-gray-300" />}
                    value={formik.values.confirmPassword}
                    formik={formik}
                    onChange={formik.handleChange}
                    mask
                    required
                  />

                  <div className="grid gap-2">
                    <Button
                      type="submit"
                      className="w-full bg-[#AFB2B6] border-2 border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-white transition duration-500"
                    >
                      Register
                    </Button>
                    <p className="my-3 text-[14px] text-center font-medium">
                      <span className="text-[#1C1C1CCC]">
                        Already have an account?{" "}
                      </span>
                      <Link to="/auth/login" className="text-[#1B1E69]">
                        Sign In
                      </Link>
                    </p>
                    <Button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="w-full bg-white border border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-black hover:text-white transition duration-500 flex items-center justify-center gap-2"
                    >
                      <img src={Google} alt="Google" className="w-5 h-5" />
                      Continue with Google
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
