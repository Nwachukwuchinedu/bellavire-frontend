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
      image: "/images/property1.png",
      title: "Vivian's Luxury Apartment",
      address: "Flat 12, Park View Road, Camden, London NW1 7HE",
      price: "£1,200 /month",
      beds: 4,
      baths: 2,
      sqft: 1200,
      type: "Featured",
    },
    {
      image: "/images/property2.png",
      title: "Greenwich Court",
      address: "Unit 5, Greenwich Court, Woolwich, London SE18 6XD",
      price: "£800 /month",
      beds: 3,
      baths: 2,
      sqft: 1000,
      type: "Featured",
    },
    {
      image: "/images/property3.png",
      title: "Precious Apartments",
      address: "20 Church Street, Ancoats, Manchester M4 1PN",
      price: "£900 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image: "/images/property4.png",
      title: "Montana Homes",
      address: "82 Rose Lane, Mossley Hill, Liverpool L18 5ED",
      price: "£700 /month",
      beds: 2,
      baths: 1,
      sqft: 800,
      type: "Featured",
    },
    {
      image: "/images/property5.png",
      title: "Ese's Palace",
      address: "Flat 7, Clarendon Road, Leeds LS2 9DA",
      price: "£850 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image: "/images/property6.png",
      title: "Cynthia's Apartments",
      address: "14 Deansgate, City Centre, Manchester M3 1FB",
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
        "https://imgs.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment:
        "Working with Bellevivre Ltd has been a fantastic experience. I found my perfect home...",
    },
    {
      name: "Jay Anderson",
      avatar:
        "https://imgs.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      comment:
        "Finding my flat in rent had never been easier thanks to Bellevivre.",
    },
    {
      name: "Sandra Emeka",
      avatar:
        "https://imgs.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
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
      <section className="py-16 text-secondary bg-gray-50">
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
              className="bg-blue-500  text-white px-6 py-3"
              onClick={() => navigate("/properties")}
            >
              View More Property
            </Button>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}

      <section className="py-10 text-secondary bg-gray-100">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Tenant Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="/user-multiple.png"
                    alt="Tenant icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">For Tenants</h3>
                <p className="text-secondary">
                  Browse verified homes, submit rental applications, and secure
                  your next space online.
                </p>
              </div>
            </div>

            {/* Landlord Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="/home-10.png"
                    alt="Landlord icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">For Landlords</h3>
                <p className="text-secondary">
                  List your property, screen applicants, accept and manage rent
                  payments from one dashboard.
                </p>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="/briefcase-01 (1).png"
                    alt="Agent icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">For Agents</h3>
                <p className="text-secondary">
                  Use our platform to help match tenants with listings and
                  viewings efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-secondary font-bold mb-6">
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
              <span className="text-secondary">
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
                />
              </div>
              <span className="text-secondary">
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
              <span className="text-secondary">
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
              <span className="text-secondary">
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
                />
              </div>
              <span className="text-secondary">
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
              <span className="text-secondary">Become a sub-agent</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-white bg-blue-600 text-white text-lg px-6 py-6"
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
