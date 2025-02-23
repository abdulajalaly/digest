import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 text-center py-4 mt-10  ">
      <p className="text-sm">
        Copyright © 2025{" "}
        <span className="font-semibold text-gray-300">Digest</span> by Abdullah
        Jalaly. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2 text-xs">
        <a href="#" className="hover:text-gray-200 transition">
          Privacy Policy
        </a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-gray-200 transition">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
