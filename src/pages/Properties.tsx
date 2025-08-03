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
import { Badge } from "lucide-react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { usePropertyStore } from "@/stores/propertyStore";

interface Property {
  id: string;
  images: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
}

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const { properties } = usePropertyStore();

  // Convert store properties to the format expected by PropertyCard
  const allProperties = properties.map(property => ({
    id: property.id,
    image: property.images[0],
    title: property.title,
    address: property.address,
    price: `£${property.rent.toLocaleString()} /month`,
    beds: property.bedrooms,
    baths: property.bathrooms,
    sqft: property.area,
    type: property.type,
  }));

  // Filter properties based on search term and filters
  const filteredProperties = allProperties.filter((property) => {
    // Search term filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        property.title.toLowerCase().includes(searchLower) ||
        property.address.toLowerCase().includes(searchLower) ||
        property.price.toLowerCase().includes(searchLower) ||
        property.type.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;
    }

    // Price filter
    if (priceFilter) {
      const priceNum = parseInt(property.price.replace(/[^0-9]/g, ""));
      if (priceFilter === "0-500" && priceNum > 500) return false;
      if (priceFilter === "500-1000" && (priceNum <= 500 || priceNum > 1000))
        return false;
      if (priceFilter === "1000-2000" && (priceNum <= 1000 || priceNum > 2000))
        return false;
      if (priceFilter === "2000+" && priceNum <= 2000) return false;
    }

    // Type filter
    if (
      typeFilter &&
      property.type.toLowerCase() !== typeFilter.toLowerCase()
    ) {
      return false;
    }

    return true;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setPriceFilter("");
    setTypeFilter("");
  };

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
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
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

              <Button
                variant="outline"
                onClick={clearFilters}
                className="whitespace-nowrap"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Results Count and Active Filters */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1 ? "Property" : "Properties"}{" "}
              Found
            </p>
            {(searchTerm || priceFilter || typeFilter) && (
              <div className="flex gap-2">
                {searchTerm && (
                  <Badge className="px-3 py-1 text-sm">
                    Search: {searchTerm}
                  </Badge>
                )}
                {priceFilter && (
                  <Badge className="px-3 py-1 text-sm">
                    Price: {priceFilter}
                  </Badge>
                )}
                {typeFilter && (
                  <Badge className="px-3 py-1 text-sm">
                    Type: {typeFilter}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-secondary">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Show message when no properties match search */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No properties found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search criteria
              </p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
