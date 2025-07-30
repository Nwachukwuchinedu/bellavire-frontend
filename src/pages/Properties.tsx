import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allProperties = [
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80",
      title: "The Greenwich Residences",
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
      title: "Manchester Heights",
      address: "12 Victoria Square, Manchester M2 5FT",
      price: "£800 /month",
      beds: 3,
      baths: 2,
      sqft: 1000,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80",
      title: "The Royal Gardens",
      address: "7 King's Road, Manchester M3 3EL",
      price: "£900 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
      title: "Parkview Apartments",
      address: "22 Greenfield Park, Manchester M4 1GD",
      price: "£700 /month",
      beds: 2,
      baths: 1,
      sqft: 800,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
      title: "The Wellington",
      address: "15 Wellington Street, Manchester M1 2JJ",
      price: "£850 /month",
      beds: 3,
      baths: 2,
      sqft: 950,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
      title: "Riverside Lofts",
      address: "3 Bridgewater Quay, Manchester M3 4AE",
      price: "£950 /month",
      beds: 3,
      baths: 2,
      sqft: 1100,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=500&q=80",
      title: "The Manchester Grand",
      address: "50 Deansgate, Manchester M3 2FE",
      price: "£1,100 /month",
      beds: 4,
      baths: 3,
      sqft: 1300,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
      title: "City Lights Apartments",
      address: "8 Oxford Road, Manchester M1 5QA",
      price: "£750 /month",
      beds: 2,
      baths: 1,
      sqft: 850,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80",
      title: "The Victoria",
      address: "24 Victoria Station Approach, Manchester M3 1WQ",
      price: "£1,050 /month",
      beds: 3,
      baths: 2,
      sqft: 1150,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80",
      title: "Studio 54",
      address: "54 Chapel Street, Manchester M3 5BZ",
      price: "£650 /month",
      beds: 1,
      baths: 1,
      sqft: 600,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
      title: "The Penthouse Collection",
      address: "1 Spinningfields, Manchester M3 3EB",
      price: "£1,300 /month",
      beds: 4,
      baths: 3,
      sqft: 1400,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
      title: "Northern Quarter Living",
      address: "36 Thomas Street, Manchester M4 1ER",
      price: "£950 /month",
      beds: 3,
      baths: 2,
      sqft: 1000,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      title: "The Charter",
      address: "Charter Street, Manchester M1 6HF",
      price: "£800 /month",
      beds: 2,
      baths: 2,
      sqft: 900,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=500&q=80",
      title: "Castlefield Wharf",
      address: "12 Liverpool Road, Manchester M3 4JQ",
      price: "£1,150 /month",
      beds: 3,
      baths: 2,
      sqft: 1200,
      type: "Featured",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
      title: "The Salford Quays Apartments",
      address: "7 Media City Way, Salford M50 2EQ",
      price: "£700 /month",
      beds: 2,
      baths: 1,
      sqft: 750,
      type: "Featured",
    },
  ];

  // Filter properties based on search term
  const filteredProperties = allProperties.filter((property) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      property.title.toLowerCase().includes(searchLower) ||
      property.address.toLowerCase().includes(searchLower) ||
      property.price.toLowerCase().includes(searchLower) ||
      property.type.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Search and Filters Section */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search, Location, Postcode or Property Name..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex gap-2 flex-wrap">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="For Sale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500">£0 - £500</SelectItem>
                  <SelectItem value="500-1000">£500 - £1000</SelectItem>
                  <SelectItem value="1000-2000">£1000 - £2000</SelectItem>
                  <SelectItem value="2000+">£2000+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Beds & Baths" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-1">1 Bed, 1 Bath</SelectItem>
                  <SelectItem value="2-1">2 Bed, 1 Bath</SelectItem>
                  <SelectItem value="2-2">2 Bed, 2 Bath</SelectItem>
                  <SelectItem value="3-2">3 Bed, 2 Bath</SelectItem>
                  <SelectItem value="4-2">4 Bed, 2 Bath</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="More" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parking">Parking</SelectItem>
                  <SelectItem value="garden">Garden</SelectItem>
                  <SelectItem value="furnished">Furnished</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            {filteredProperties.length} Properties Found
          </p>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-secondary">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} id={index + 1} />
            ))}
          </div>

          {/* Show message when no properties match search */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No properties found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
