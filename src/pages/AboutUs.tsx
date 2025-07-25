import Navbar from "@/components/Navbar";
import HeroAboutUs from "@/components/HeroAboutUs";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroAboutUs />
      <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 space-y-32">
        {/* WHO WE ARE */}
        <div className="flex flex-col lg:flex-row gap-11 items-center justify-center">
          <div className="space-y-7 max-w-xl">
            <h1 className="font-bold leading-5 text-4xl text-secondary">
              WHO WE ARE
            </h1>
            <p className="font-normal text-xl leading-8">
              The Housing Management Web Application is a comprehensive platform
              designed to simplify housing management for tenants, landlords,
              property managers, and administrators. We leverage smart
              technology to enhance efficiency and communication across all
              parties.
            </p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img
              src="/houseAboutUs1.png"
              alt="house"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Agent Support */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-52 items-center justify-center">
          <img
            src="/Frame 1.png"
            alt="Agent Support"
            className="h-48 w-48 md:h-60 md:w-60"
          />
          <img
            src="/Frame 2.png"
            alt="Agent Support"
            className="h-48 w-48 md:h-60 md:w-60"
          />
          <img
            src="/Frame 3.png"
            alt="Agent Support"
            className="h-48 w-48 md:h-60 md:w-60"
          />
        </div>

        {/* OUR PHILOSOPHY */}
        <div className="flex flex-col lg:flex-row gap-11 items-center justify-center">
          <div className="w-full lg:w-[50%]">
            <img
              src="/slidecardAboutUs.png"
              alt="house"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-7 max-w-xl">
            <h1 className="font-bold leading-5 text-4xl text-secondary">
              OUR PHILOSOPHY
            </h1>
            <p className="font-normal text-xl leading-8">
              We aim to bridge the gap between housing stakeholders with
              user-friendly dashboards and robust features, ensuring a smooth
              experience from property browsing to lease agreements.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
