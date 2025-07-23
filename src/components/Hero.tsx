import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-gray-800/80 to-gray-600/80 flex items-center">
      <div className="absolute inset-0 bg-[url('/Rectangle%20101.png')] bg-cover bg-center bg-no-repeat" />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find, Rent, and Manage Your Next Home
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          All in One Place
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Your trusted UK-based property platform for tenants, landlords, and
          agents
        </p>

        <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Property Search
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="To Buy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">To Buy</SelectItem>
                  <SelectItem value="rent">To Rent</SelectItem>
                  <SelectItem value="sell">To Sell</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>
              <Input placeholder="Any Location" className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100k">£0 - £100k</SelectItem>
                  <SelectItem value="100k-200k">£100k - £200k</SelectItem>
                  <SelectItem value="200k+">£200k+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bed</label>
              <Select>
                <SelectTrigger className="w-full">
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

            <Button className="bg-primary hover:bg-primary/90 text-white h-10">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
