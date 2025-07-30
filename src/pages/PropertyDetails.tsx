import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Waves,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get the property data passed from the Properties page
  const property = location.state?.property || {
    id: id,
    title: "Rosewood Apartments",
    address: "23 Baker Street, Marylebone, London W1U 6FY",
    price: "1,500",
    lease: "1 Year, 6 months",
    beds: 3,
    baths: 2,
    sqft: 1200,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Sunrise Residences is a modern apartment complex strategically located in the heart of Bishop's Renton District. Just a short walk from several top Universities, including the global ranking Queen's University. Designed with the needs of international students in mind, this building offers a perfect blend of comfort, convenience, and community.",
    facilities: [
      { icon: Wifi, label: "Wifi" },
      { icon: Car, label: "Laundry" },
      { icon: Coffee, label: "Swimming pool" },
      { icon: Tv, label: "Furnished Kitchen" },
      { icon: Wind, label: "Elevator" },
      { icon: Waves, label: "Water" },
    ],
    landlord: {
      name: "Franklin Hospital",
      email: "emailaddress@gmail.com",
      phone: "+44 7999 999999",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {property.title}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image Gallery */}
            <div className="relative mb-6">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2 mb-8">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`View ${index + 1}`}
                  className={`h-16 object-cover rounded cursor-pointer ${
                    index === currentImageIndex ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

            {/* Property Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Address: {property.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Bth Included: ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Furnished: ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Sq.ft area avk</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      📍 {property.beds} bedrooms
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      🚿 {property.baths} bathrooms
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <facility.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Landlord/Agent Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Landlord/Agent Detail
                </h2>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Name:</strong> {property.landlord.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.landlord.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.landlord.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <Map
                  address={property.address}
                  coordinates={[-0.1419, 51.5074]} // Baker Street coordinates
                  className="w-full h-64"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="mb-2">£{property.price}/month</Badge>
                  <p className="text-sm text-muted-foreground">
                    ⏰ {property.lease}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full" size="lg">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    See A Tour
                  </Button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>📍 Distance:</span>
                    <span>University only 5 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
