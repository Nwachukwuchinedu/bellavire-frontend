import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePropertyStore } from "@/stores/propertyStore";
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

interface Property {
  id: string;
  title: string;
  images: string[];
  description: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rent: number;
  type: string;
  status: string;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { properties } = usePropertyStore();

  const property = properties.find((p) => p.id === id);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);

        if (!id) {
          setError("Invalid property ID");
          return;
        }

        // Check again after loading
        if (properties.find((p) => p.id === id)) {
          setError("Property not found");
        }
      } catch (err) {
        setError("Failed to load property details");
        console.error("Property fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, property, properties]);

  const facilities = [
    { icon: Wifi, label: "Wifi" },
    { icon: Car, label: "Laundry" },
    { icon: Coffee, label: "Swimming pool" },
    { icon: Tv, label: "Furnished Kitchen" },
    { icon: Wind, label: "Elevator" },
    { icon: Waves, label: "Water" },
  ];

  const nextImage = () => {
    if (!property?.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    if (!property?.images) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Loading property...</h2>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            {error || "Property not found"}
          </h2>
          <Button onClick={() => navigate("/properties")}>
            Back to Properties
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="self-start"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

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

        <h1 className="text-2xl font-bold mb-6">{property.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative group">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
                loading="eager"
              />

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-6 gap-2 mt-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-16 overflow-hidden rounded transition-all ${
                        index === currentImageIndex
                          ? "ring-2 ring-primary"
                          : "opacity-75"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Property Details</h2>
                <p className="text-muted-foreground">{property.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">
                      {property.area.toLocaleString()} sq ft
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <facility.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <Map
                  address={property.address}
                  className="w-full h-64 rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact & Pricing */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <Badge className="text-lg px-4 py-1">
                    £{property.rent.toLocaleString()}/month
                  </Badge>
                  <p className="text-muted-foreground mt-2">Available now</p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Schedule Tour
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Property Type:
                    </span>
                    <span>{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span>{property.status}</span>
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

export default PropertyDetail;
