import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-800/80 to-gray-600/80 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/Rectangle%20101.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Find, Rent, and Manage Your Next Home
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          All in One Place
        </h2>
        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          Your trusted UK-based property platform for tenants, landlords, and
          agents
        </p>

        {/* Form Card */}
        <div className="bg-white p-6 rounded-lg max-w-5xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">
                Property Search
              </label>
              <Select>
                <SelectTrigger
                  className="w-full border border-black rounded-lg text-black"
                  icon={<ChevronDown className="text-black" />}
                >
                  <SelectValue placeholder="To Buy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">To Buy</SelectItem>
                  <SelectItem value="rent">To Rent</SelectItem>
                  <SelectItem value="sell">To Sell</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">
                Location
              </label>
              <Select>
                <SelectTrigger
                  className="w-full border border-black rounded-lg text-black"
                  icon={<ChevronDown className="text-black" />}
                >
                  <SelectValue placeholder="Any Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="manchester">Manchester</SelectItem>
                  <SelectItem value="birmingham">Birmingham</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">
                Price
              </label>
              <Select>
                <SelectTrigger
                  className="w-full border border-black rounded-lg text-black"
                  icon={<ChevronDown className="text-black" />}
                >
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100k">£0 - £100k</SelectItem>
                  <SelectItem value="100k-200k">£100k - £200k</SelectItem>
                  <SelectItem value="200k+">£200k+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Beds */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Bed</label>
              <Select>
                <SelectTrigger
                  className="w-full border border-black rounded-lg text-black"
                  icon={<ChevronDown className="text-black" />}
                >
                  <SelectValue placeholder="Bed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Bed</SelectItem>
                  <SelectItem value="2">2 Beds</SelectItem>
                  <SelectItem value="3">3 Beds</SelectItem>
                  <SelectItem value="4+">4+ Beds</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Button */}
            <Button className="bg-primary hover:bg-primary/90 text-white h-10 w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
