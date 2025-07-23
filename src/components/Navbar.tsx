import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/Group 36230.png"
            alt="Bellevivre Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-xl font-bold text-secondary">
            Bellevivre Ltd
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-sm">
          {/* Buy Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary  transition focus:outline-none">
              <span>Buy</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem>Residential</DropdownMenuItem>
              <DropdownMenuItem>Commercial</DropdownMenuItem>
              <DropdownMenuItem>Land</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-secondary  transition">
            Sell
          </a>

          {/* Rent Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary  transition focus:outline-none">
              <span>Rent</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem>Short Let</DropdownMenuItem>
              <DropdownMenuItem>Long Term</DropdownMenuItem>
              <DropdownMenuItem>Vacation Homes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-secondary  transition">
            Manage Properties
          </a>
          <a href="#" className="text-secondary  transition">
            About Us
          </a>
          <a href="#" className="text-secondary  transition">
            Contact
          </a>
        </div>

        {/* Sign In Button */}
        <Button className=" px-6 bg-blue-600  text-white text-sm font-medium">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
