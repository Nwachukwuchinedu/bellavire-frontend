import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSection from "@/components/TestimonialCard";

const Index = () => {
  const navigate = useNavigate();

  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80",
      title: "4 Bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£1,200 /month",
      beds: 4,
      baths: 2,
      sqft: 1200,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
      title: "3 bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£800 /month",
      beds: 3,
      baths: 2,
      sqft: 1000,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80",
      title: "3 bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£900 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
      title: "2 bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£700 /month",
      beds: 2,
      baths: 1,
      sqft: 800,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
      title: "3 bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£850 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
      title: "3 bedrooms Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£950 /month",
      beds: 3,
      baths: 2,
      sqft: 1100,
      type: "Featured",
    },
  ];

  const testimonials = [
    {
      name: "Logan Sanders",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment:
        "Working with Bellevivre Ltd has been a fantastic experience. I found my perfect home...",
    },
    {
      name: "Jay Anderson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment:
        "Finding my flat in rent had never been easier thanks to Bellevivre.",
    },
    {
      name: "Sandra Emeka",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment:
        "Thanks to the Bellevivre team who helped us manage several of...",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Popular Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="text-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/properties")}
            >
              View More Property
            </Button>
          </div>
        </div>
      </section>
      {/* Who Is This For Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Tenants</h3>
              <p className="text-gray-600">
                Browse verified homes, submit rental applications, and secure
                your next space online.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Landlords</h3>
              <p className="text-gray-600">
                List your property, screen applicants, accept and manage rent
                payments from one dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">For Agents</h3>
              <p className="text-gray-600">
                Use our platform to help match tenants with listings and
                viewings efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What You Can Do Section */}
      <section className="py-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-blue-700 font-bold mb-6">
            What You Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-3">
            {/* Feature 1 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/search-02.png"
                  alt="Discover properties"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-700">
                Discover verified properties in the UK
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/file-02.png"
                  alt="Digital lease"
                  width={24}
                  height={24}
                  className="text-green-500"
                />
              </div>
              <span className="text-gray-700">
                Sign digital lease agreements
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/wallet-02.png"
                  alt="Secure payments"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-700">
                Secure rent payments & transaction history
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/solar_document-add-outline.png"
                  alt="Manage documents"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-700">
                Manage documents and tenancy from one place
              </span>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/hugeicons_sale-tag-01.png"
                  alt="List property"
                  width={24}
                  height={24}
                  className="text-green-500"
                />
              </div>
              <span className="text-gray-700">
                List and market your property easily
              </span>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start text-left p-2 bg-white rounded-none hover:shadow-sm transition-all">
              <div className="mr-2 mt-1 flex-shrink-0">
                <img
                  src="/svg/briefcase-01.png"
                  alt="Become agent"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-700">Become a sub-agent</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-primary bg-blue-700 text-white text-lg px-6 py-6"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
