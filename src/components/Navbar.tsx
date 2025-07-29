import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/Group 36230.png"
              alt="Bellevivre Logo"
              className="h-8 w-auto object-contain "
            />
          </Link>
          <Link to="/">
            <span className="text-xl font-bold text-secondary">
              Bellevivre Ltd
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-sm">
          {/* Buy */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary transition focus:outline-none">
              <span>Buy</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem>Residential</DropdownMenuItem>
              <DropdownMenuItem>Commercial</DropdownMenuItem>
              <DropdownMenuItem>Land</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="#" className="text-secondary transition">
            Sell
          </Link>

          {/* Rent */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary transition focus:outline-none">
              <span>Rent</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem>Short Let</DropdownMenuItem>
              <DropdownMenuItem>Long Term</DropdownMenuItem>
              <DropdownMenuItem>Vacation Homes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/manage-properties" className="block text-secondary">
            Manage Properties
          </Link>
          <Link to="/about-us" className="block text-secondary">
            About Us
          </Link>
          <Link to="/career" className="block text-secondary">
            Career
          </Link>
          <Link to="/contact-us" className="text-secondary transition">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Desktop Sign-in/Profile */}
          <div className="hidden md:flex">
            {isLoggedIn ? (
              <Button variant="ghost" className="text-secondary">
                <User className="h-5 w-5 mr-2" /> Profile
              </Button>
            ) : (
              <a href="/auth/login">
                <Button className="px-6 bg-blue-600 text-white text-sm font-medium">
                  Sign In
                </Button>
              </a>
            )}
          </div>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow px-6 pt-4 pb-6 space-y-4 font-medium text-sm">
          {/* Buy */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary">
              <span>Buy</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Residential</DropdownMenuItem>
              <DropdownMenuItem>Commercial</DropdownMenuItem>
              <DropdownMenuItem>Land</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="#" className="block text-secondary">
            Sell
          </Link>

          {/* Rent */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-secondary">
              <span>Rent</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Short Let</DropdownMenuItem>
              <DropdownMenuItem>Long Term</DropdownMenuItem>
              <DropdownMenuItem>Vacation Homes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/manage-properties" className="block text-secondary">
            Manage Properties
          </Link>
          <Link to="/about-us" className="block text-secondary">
            About Us
          </Link>
          <Link to="/career" className="block text-secondary">
            Career
          </Link>
          <Link to="/contact-us" className="block text-secondary">
            Contact
          </Link>

          {/* Mobile Auth */}
          {isLoggedIn ? (
            <Button
              variant="ghost"
              className="text-secondary w-full flex justify-start"
            >
              <User className="h-5 w-5 mr-2" /> Profile
            </Button>
          ) : (
            <a href="/auth/login">
              <Button className="px-5 mt-2  bg-blue-600 text-white text-sm font-medium ">
                Sign In
              </Button>
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
