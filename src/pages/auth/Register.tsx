import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore, UserRole } from "@/stores/authStore";
import { Button } from "@/components/ui/button";
// import BackgroundCarousel from "@/components/auth/BackgroundCarousel";
import { DefaultInput } from "@/components/input/DefaultInput";
import { LockKeyhole } from "lucide-react";
import Logo from "@/assets/images/logo.png";
import Warning from "@/assets/icons/warning.svg";
import Google from "@/assets/icons/google.svg";
import AuthSlider from "@/components/AuthSlider";

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const [formData, setFormData] = useState({
    organizationName: "",
    Phone: "",
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: "" as UserRole,
  });

  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock registration - replace with actual authentication
    const newUser = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.name,
      role: formData.role,
    };
    const newOrganization = {
      id: Date.now().toString(),
      email: formData.email,
      name: formData.organizationName,
      role: formData.role,
    };

    login(newUser);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Mobile slider */}
      <div className="absolute inset-0 block lg:hidden z-0">
        <AuthSlider bottom={40} />
      </div>

      {/* Desktop slider */}
      <div className="hidden lg:block lg:w-1/2 z-0">
        <AuthSlider bottom={40} />
      </div>

      {/* Form container */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-[100px]">
        <div className="bg-white rounded-[24px] lg:bg-transparent p-6 lg:p-2 w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-6">
            <img src={Logo} alt="logo" className="hidden lg:flex w-36 md:w-52" />
            <h2 className="mt-4 text-[#1e1e1e] font-semibold text-[17px] md:text-[24px] leading-[19px]">
              Create an Account
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {type === "organization" && (
              <>
                <DefaultInput
                  value={formData.name}
                  label="Organization Name"
                  name="organizationName"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({ ...formData, organizationName: e.target.value })
                  }
                  required
                />
              </>
            )}

            {type === "individual" && (
              <>
                <DefaultInput
                  value={formData.firstName}
                  label="First Name"
                  name="firstName"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
                <DefaultInput
                  value={formData.lastName}
                  label="Last Name"
                  name="lastName"
                  placeholder=" "
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </>
            )}

            <DefaultInput
              value={formData.email}
              label="Email Address"
              name="email"
              placeholder=" "
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <DefaultInput
              value={formData.Phone}
              label="Phone Number"
              name="phone"
              placeholder=" "
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, Phone: e.target.value })
              }
              required
            />

            <div>
              <DefaultInput
                value={formData.password}
                leftIcon={<LockKeyhole className="size-4 text-gray-300" />}
                label="Password"
                name="password"
                type="password"
                placeholder=" "
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                mask={true}
              />
              <div className="flex items-start gap-0.5 mt-1">
                <img src={Warning} className="w-4 h-4" alt="warning" />
                <p className="font-light text-[11px] md:text-[14px] leading-[100%] text-[#1e1e1e]">
                  The password should contain more than eight characters,
                  including a caplocks, a number and a special character.
                </p>
              </div>
            </div>

            <DefaultInput
              leftIcon={<LockKeyhole className="size-4 text-gray-300" />}
              type="password"
              placeholder="Confirm password"
              className="placeholder:text-gray-300"
              label="Confirm Password"
              name="confirmPassword"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              mask={true}
            />

            <div className="grid gap-2">
              <Button
                type="submit"
                onClick={handleRegister}
                className="w-full bg-[#AFB2B6] border-2 border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-white transition duration-500"
              >
                Register
              </Button>
              <p className="my-3 text-[14px] text-center font-medium">
                <span className="text-[#1C1C1CCC]">Already have an account? </span>
                <span className="text-[#1B1E69]">
                  <Link to="/login">Sign In</Link>
                </span>
              </p>
              <Button
                type="button"
                className="w-full bg-white border border-[#AFB2B6] hover:bg-[#1B1E69] hover:border-[#1B1E69] text-black hover:text-white transition duration-500 flex items-center justify-center gap-2"
              >
                <img src={Google} alt="Google" className="w-5 h-5" />
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

