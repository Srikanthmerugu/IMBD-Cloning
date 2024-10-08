import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-20">
        {/* Brand/Logo */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-white">Movie Explorer</h1>
          <p className="text-sm text-gray-400">Your ultimate movie database</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-amber-500 transition duration-300">Home</a>
          <a href="#movies" className="hover:text-amber-500 transition duration-300">Movies</a>
          <a href="#about" className="hover:text-amber-500 transition duration-300">About Us</a>
          <a href="#contact" className="hover:text-amber-500 transition duration-300">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Movie Explorer. All Rights Reserved at @SrikanthMerugu.</p>
      </div>
    </footer>
  );
};

export default Footer;
