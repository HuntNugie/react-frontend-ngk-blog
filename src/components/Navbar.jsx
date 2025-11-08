import { Link } from "react-router-dom";
export default function Navbar () {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="font-bold text-xl">MyBlog</div>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/blog" className="hover:text-gray-400 transition">
          Blog
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
        <Link
          to="/login"
          className="ml-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
