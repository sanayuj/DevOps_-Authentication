import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/dashboard" className="text-2xl font-bold text-blue-600">
        MyApp
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/profile" className="hover:text-blue-600">
          Profile
        </Link>
        <Link to="/settings" className="hover:text-blue-600">
          Settings
        </Link>
      </div>

      {/* Login / Logout */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
}
