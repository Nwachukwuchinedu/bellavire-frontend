import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto gap-8">
        {/* Company Info */}
        <div className="mb-6 md:mb-0 max-w-md">
          <div className="flex items-center space-x-2 mb-6">
            <img
              src="/Group 36230.png"
              alt="Bellevivre Logo"
              className="h-10 w-auto object-contain "
            />
            <span className="text-xl font-bold text-white">Bellevivre Ltd</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            A modern property management platform built for tenants, landlords,
            and agents. Easily browse, rent, list, and manage properties — all
            in one place. Designed to simplify renting, streamline
            communication, and make home-finding or property management more
            seamless than ever.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8 md:flex-col justify-between">
          {/* Newsletter Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <div className="flex items-center bg-white rounded-sm overflow-hidden max-w-md">
              <div className="px-3 py-2 text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 border-0 bg-transparent text-gray-900 focus-visible:ring-0"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-none">
                Send
              </Button>
            </div>
          </div>

          {/* Quick Links and Socials Row */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
