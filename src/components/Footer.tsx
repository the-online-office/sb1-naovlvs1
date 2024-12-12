import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Logo';

const footerLinks = {
  "Company": [
    "About Us",
    "Careers",
    "Press & News",
    "Partnerships",
    "Privacy Policy",
    "Terms of Service"
  ],
  "Categories": [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    "Writing & Translation",
    "Admin & Support",
    "Finance & Accounting"
  ],
  "Support": [
    "Help & Support",
    "Trust & Safety",
    "Selling on The Online Office",
    "Buying on The Online Office",
    "Contact Us"
  ],
  "Community": [
    "Success Stories",
    "Community Hub",
    "Blog",
    "Influencers",
    "Affiliates",
    "Podcast"
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-white cursor-pointer" />
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Settings</a>
              <span>© 2024 The Online Office. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}