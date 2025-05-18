import React from "react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-primary p-3 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="text-xs md:text-sm text-white mb-0">
              © 2021 Active People's Microfinance Institution Plc.
            </p>
          </div>
        </div>
        <div className="flex items-center text-white">
          <p className="mb-0 mr-3 text-xs md:text-sm">បណ្តឹងអតិថិជន</p>
          <Phone size={16} className="mr-2" />
          <span className="text-xs md:text-sm ms:text">
            +855 (0)12 574 233, +855 (0)15 538 900
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;