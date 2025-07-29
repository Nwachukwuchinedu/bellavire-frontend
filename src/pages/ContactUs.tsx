import Navbar from "@/components/Navbar";
import HeroContactUs from "@/components/HeroContactUs";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  countryCode: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroContactUs />
      <div className="py-14 px-4 sm:px-6 md:px-12 lg:px-24 space-y-14 max-w-[1920px] mx-auto">
        <div className="space-y-5 px-2">
          <h1 className="font-medium text-2xl sm:text-3xl">CONTACT US</h1>
          <p className="font-semibold text-xl sm:text-2xl text-secondary">
            Need Assistance ? Reach Out To Us
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16 gap-10 justify-between px-2 sm:px-4 py-10">
          {/* Contact Info Card */}
          <div className="bg-secondary text-white lg:min-h-[654px] w-full lg:w-1/2 space-y-8 sm:space-y-10 flex flex-col items-center justify-center rounded-3xl p-6">
            <h1 className="font-semibold text-3xl sm:text-4xl text-center">
              Confirmation Information
            </h1>

            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 sm:w-9 sm:h-9" />
              <span className="font-normal text-xl sm:text-2xl lg:text-3xl">
                (+44) 9021353948
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 sm:w-9 sm:h-9" />
              <span className="font-normal text-xl sm:text-2xl lg:text-3xl">
                bellevivre@gmail.com
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 w-full max-w-[535px] mx-auto"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="font-normal text-base sm:text-lg"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full border-black border-2 rounded-md h-14 sm:h-16 p-2"
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm sm:text-base">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-normal text-base sm:text-lg"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full p-2 border-black border-2 rounded-md h-14 sm:h-16"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm sm:text-base">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="font-normal text-base sm:text-lg"
                >
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Country Code Dropdown */}
                  <select
                    id="countryCode"
                    {...register("countryCode", { required: true })}
                    className="border-black border-2 rounded-md h-14 sm:h-16 p-2 w-28 sm:w-32"
                  >
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+233">🇬🇭 +233</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+27">🇿🇦 +27</option>
                  </select>

                  {/* Phone Input */}
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: { value: 7, message: "Too short" },
                    })}
                    className="w-full border-black border-2 rounded-md h-14 sm:h-16 p-2"
                    aria-invalid={!!errors.phone}
                  />
                </div>

                {/* Error messages */}
                {(errors.countryCode || errors.phone) && (
                  <p className="text-red-500 mt-1 text-sm sm:text-base">
                    {errors.countryCode?.message || errors.phone?.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="font-normal text-base sm:text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full h-32 sm:h-44 border-black border-2 rounded-md p-2"
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm sm:text-base">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-secondary text-white text-base sm:text-lg font-medium rounded w-full h-16 sm:h-20"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
