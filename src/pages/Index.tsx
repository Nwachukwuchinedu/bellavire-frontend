import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Popular Properties */}
      <section className="py-12 sm:py-16 bg-gray-50 text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="text-center">
            <Button
              className="bg-blue-500 text-white px-6 py-3"
              onClick={() => navigate("/properties")}
            >
              View More Property
            </Button>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 sm:py-16 bg-gray-100 text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Tenants",
                icon: "/user-multiple.png",
                desc: "Browse verified homes, submit rental applications, and secure your next space online.",
              },
              {
                title: "For Landlords",
                icon: "/home-10.png",
                desc: "List your property, screen applicants, accept and manage rent payments from one dashboard.",
              },
              {
                title: "For Agents",
                icon: "/briefcase-01 (1).png",
                desc: "Use our platform to help match tenants with listings and viewings efficiently.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-12 sm:py-16 bg-gray-50 text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">What You Can Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
            {[
              {
                icon: "/svg/search-02.png",
                text: "Discover verified properties in the UK",
              },
              {
                icon: "/svg/file-02.png",
                text: "Sign digital lease agreements",
              },
              {
                icon: "/svg/wallet-02.png",
                text: "Secure rent payments & transaction history",
              },
              {
                icon: "/svg/solar_document-add-outline.png",
                text: "Manage documents and tenancy from one place",
              },
              {
                icon: "/svg/hugeicons_sale-tag-01.png",
                text: "List and market your property easily",
              },
              { icon: "/svg/briefcase-01.png", text: "Become a sub-agent" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-md hover:shadow transition-all"
              >
                <img src={item.icon} alt="icon" className="w-6 h-6 mt-1" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="border-white bg-blue-600 text-white text-lg px-6 py-6"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      <Footer />
    </div>
  );
};

export default Index;
