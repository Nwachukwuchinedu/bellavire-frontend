import Navbar from "@/components/Navbar";
import HeroCareer from "@/components/HeroCareer";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FormData {
  fullAddress: string;
  emailAddress: string;
  phoneNumber: string;
  countryCode: string;
  position: string;
  cv: File | null;
  message: string;
}

const Career = () => {
  const jobOpenings = [
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
    {
      position: "Property Support Officer",
      department: "Property Management",
      location: "Manchester",
      type: "Full Time",
    },
  ];
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      fullAddress: "",
      emailAddress: "",
      phoneNumber: "",
      position: "",
      message: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (file) {
      setSelectedFile(file);
      setValue("cv", file, { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    const fullPhoneNumber = `${data.countryCode}${data.phoneNumber}`;
    const submissionPayload = {
      ...data,
      phoneNumber: fullPhoneNumber,
    };

    console.log("Submitted data:", submissionPayload);
    alert("Your application has been submitted successfully!");
    reset();
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroCareer />
      <div className="relative px-4 py-10 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block">
            {/* Top-left: Man with glasses */}
            <div className="absolute top-0 -left-26 w-40 h-20 lg:w-60 lg:h-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/image1.png"
                alt="Professional man with glasses"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right: Business meeting */}
            <div className="absolute  top-24 -right-10 w-40 h-20 lg:w-60 lg:h-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/image2.png"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-left: Woman with curly hair */}
            <div className="absolute bottom-24 -left-30 w-40 h-20 lg:w-60 lg:h-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/image3.png"
                alt="Professional woman"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right: Smiling man */}
            <div className="absolute  bottom-0 -right-10 w-40 h-20 lg:w-60 lg:h-24 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/image4.png"
                alt="Professional smiling man"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary leading-snug">
                Join Us in Shaping the <br className="hidden sm:block" />
                Future of Housing.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed font-normal text-gray-700">
                We're building more than just homes — we're building
                opportunities. Explore how your skills can make a real impact in
                the real estate and housing industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-medium"
                >
                  Open Position
                </Button>
                <Button
                  size="lg"
                  className="px-6 py-3 bg-secondary text-white rounded-lg font-medium"
                >
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why work with us? */}
      <div className="bg-gray-100 flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl text-center leading-tight mb-10">
          Why Work With Us?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="space-y-4 border py-8 px-6 bg-white shadow-sm rounded-md">
            <img
              src="/brain-02.png"
              alt="brain"
              className="w-14 h-14 bg-gray-100 rounded-md"
            />
            <h2 className="font-semibold text-xl leading-6">
              Innovative Environment
            </h2>
            <p className="font-normal text-base leading-7">
              Work with cutting-edge tools to improve the housing experience for
              tenants, landlords, and agents.
            </p>
          </div>

          <div className="space-y-4 border py-8 px-6 bg-white shadow-sm rounded-md">
            <img
              src="/people.png"
              alt="people"
              className="w-14 h-14 bg-gray-100 rounded-md"
            />
            <h2 className="font-semibold text-xl leading-6">
              Collaborative Culture
            </h2>
            <p className="font-normal text-base leading-7">
              Be part of a supportive team where your ideas matter.
            </p>
          </div>

          <div className="space-y-4 border py-8 px-6 bg-white shadow-sm rounded-md">
            <img
              src="/globe.png"
              alt="globe"
              className="w-14 h-14 bg-gray-100 rounded-md"
            />
            <h2 className="font-semibold text-xl leading-6">Impactful Work</h2>
            <p className="font-normal text-base leading-7">
              Serve real people in real communities, across the UK.
            </p>
          </div>
        </div>
      </div>
      {/* job opening */}
      <div className="mx-auto px-4 sm:px-6 lg:px-24 py-12 space-y-8 max-w-7xl">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-700">
            Job Opening
          </h1>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-secondary hover:bg-secondary">
                    <TableHead className="text-white font-semibold text-center py-4 whitespace-nowrap">
                      Position
                    </TableHead>
                    <TableHead className="text-white font-semibold text-center py-4 whitespace-nowrap">
                      Department
                    </TableHead>
                    <TableHead className="text-white font-semibold text-center py-4 whitespace-nowrap">
                      Location
                    </TableHead>
                    <TableHead className="text-white font-semibold text-center py-4 whitespace-nowrap">
                      Type
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {jobOpenings.map((job, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <TableCell className="text-center py-4 font-medium whitespace-nowrap">
                        {job.position}
                      </TableCell>
                      <TableCell className="text-center py-4 whitespace-nowrap">
                        {job.department}
                      </TableCell>
                      <TableCell className="text-center py-4 whitespace-nowrap">
                        {job.location}
                      </TableCell>
                      <TableCell className="text-center py-4 whitespace-nowrap">
                        {job.type}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* send us your cv */}
      <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-100 min-h-screen">
        <Card className="shadow-lg mx-auto max-w-4xl">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/public/Frame 25.png"
                alt="logo"
                className="w-80 h-24"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium leading-10">
              Send Us Your CV Today, Hear From Us Tomorrow!
            </h1>
          </CardHeader>

          <CardContent className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Grid for Address and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Address */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullAddress"
                    className="font-normal text-base sm:text-lg"
                  >
                    Full Address
                  </Label>
                  <Input
                    id="fullAddress"
                    placeholder="Enter your full address"
                    {...register("fullAddress", {
                      required: "Full address is required",
                      minLength: {
                        value: 10,
                        message: "Address must be at least 10 characters",
                      },
                    })}
                    className={`${
                      errors.fullAddress ? "border-red-500" : "border-gray-400"
                    } h-14 sm:h-16 w-full border-2`}
                  />
                  {errors.fullAddress && (
                    <p className="text-sm text-red-500">
                      {errors.fullAddress.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label
                    htmlFor="emailAddress"
                    className="font-normal text-base sm:text-lg"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    placeholder="Enter your email"
                    {...register("emailAddress", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`${
                      errors.emailAddress ? "border-red-500" : "border-gray-400"
                    } h-14 sm:h-16 w-full border-2`}
                  />
                  {errors.emailAddress && (
                    <p className="text-sm text-red-500">
                      {errors.emailAddress.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Grid for Phone and Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phoneNumber"
                    className="font-normal text-base sm:text-lg"
                  >
                    Phone Number
                  </Label>
                  <div className="flex">
                    <select
                      {...register("countryCode")}
                      className="h-14 sm:h-16 border-2 border-r-0 border-gray-400 rounded-l-md px-3 text-sm"
                    >
                      <option value="+234">🇳🇬 +234</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+81">🇯🇵 +81</option>
                    </select>
                    <Input
                      id="phoneNumber"
                      className={`rounded-l-none h-14 sm:h-16 w-full ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-400"
                      } border-2`}
                      placeholder="Enter phone number"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10,11}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label
                    htmlFor="position"
                    className="font-normal text-base sm:text-lg"
                  >
                    Position
                  </Label>
                  <Controller
                    name="position"
                    control={control}
                    rules={{ required: "Please select a position" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          className={`${
                            errors.position
                              ? "border-red-500"
                              : "border-gray-400"
                          } h-14 sm:h-16 w-full border-2`}
                        >
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="property-management">
                            Property Management
                          </SelectItem>
                          <SelectItem value="property-support">
                            Property Support Officer
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance
                          </SelectItem>
                          <SelectItem value="administration">
                            Administration
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.position && (
                    <p className="text-sm text-red-500">
                      {errors.position.message}
                    </p>
                  )}
                </div>
              </div>

              {/* CV Upload */}
              <div className="space-y-2">
                <Label
                  htmlFor="cv"
                  className="font-normal text-base sm:text-lg"
                >
                  CV
                </Label>
                <div
                  className={`border-2 rounded-lg p-4 sm:p-6 text-center h-28 ${
                    errors.cv ? "border-red-500" : "border-gray-400"
                  }`}
                >
                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    {...register("cv", {
                      required: "Please upload your CV",
                    })}
                  />
                  <label
                    htmlFor="cv"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8" />
                    <h1 className="bg-secondary text-white hover:bg-secondary hover:text-white p-2 rounded-md text-sm sm:text-base">
                      Upload File
                    </h1>

                    {selectedFile && (
                      <p className="text-sm mt-2 truncate max-w-xs">
                        Selected: {selectedFile.name}
                      </p>
                    )}
                  </label>
                </div>
                {errors.cv && (
                  <p className="text-sm text-red-500">{errors.cv.message}</p>
                )}
              </div>

              {/* Message Box */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="font-normal text-base sm:text-lg"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  className={`w-full h-40 sm:h-56 ${
                    errors.message ? "border-red-500" : "border-gray-400"
                  } border-2`}
                  {...register("message", {
                    required: "Please provide a message",
                    minLength: {
                      value: 20,
                      message: "Message must be at least 20 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary text-white py-6 sm:py-8 text-base sm:text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};
export default Career;
