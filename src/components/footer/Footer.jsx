import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/capabilities" className="hover:text-gray-400">Capabilities</a></li>
            <li><a href="/resources" className="hover:text-gray-400">Resources</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="/quote" className="hover:text-gray-400">Request a Quote</a></li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div>
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          <ul className="space-y-2">
            <li><a href="/post1" className="hover:text-gray-400">What is Powder Coating with a Zirconium Wash System?</a></li>
            <li><a href="/post2" className="hover:text-gray-400">What is Galvanization?</a></li>
            <li><a href="/post3" className="hover:text-gray-400">Everything You Need to Know About Powder Coating</a></li>
            <li><a href="/post4" className="hover:text-gray-400">What is Sand Blasting?</a></li>
            <li><a href="/post5" className="hover:text-gray-400">Soda Blasting vs. Sand Blasting</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <address className="not-italic mb-4 space-y-2">
            <p>6755 OK-66, Tulsa, OK 74131</p>
            <p>4940 E 66th St N, Tulsa, OK 74117</p>
            <p>(918) 446-5363</p>
            <p><a href="mailto:sales@abitl.com" className="hover:text-gray-400">sales@abitl.com</a></p>
          </address>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-blue-600"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" className="text-pink-600"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="text-blue-700"><FaLinkedin size={24} /></a>
            <a href="https://youtube.com" className="text-red-600"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
