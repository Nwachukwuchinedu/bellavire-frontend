import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  const allProperties = [
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
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
      title: "Rosewood Apartments",
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
      title: "Rosewood Apartments",
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
      title: "Rosewood Apartments",
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
      title: "Rosewood Apartments",
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
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£950 /month",
      beds: 3,
      baths: 2,
      sqft: 1100,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£1,100 /month",
      beds: 4,
      baths: 3,
      sqft: 1300,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£750 /month",
      beds: 2,
      baths: 1,
      sqft: 850,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£1,050 /month",
      beds: 3,
      baths: 2,
      sqft: 1150,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£650 /month",
      beds: 1,
      baths: 1,
      sqft: 600,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£1,300 /month",
      beds: 4,
      baths: 3,
      sqft: 1400,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£950 /month",
      beds: 3,
      baths: 2,
      sqft: 1000,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£800 /month",
      beds: 2,
      baths: 2,
      sqft: 900,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£1,150 /month",
      beds: 3,
      baths: 2,
      sqft: 1200,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
      title: "Rosewood Apartments",
      address: "Apt 5, Greenwich Court, Greenwich, Manchester M1 4FY",
      price: "£700 /month",
      beds: 2,
      baths: 1,
      sqft: 750,
      type: "Featured",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Properties Listing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h1 className="text-3xl font-bold text-center mb-12">All Properties</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
