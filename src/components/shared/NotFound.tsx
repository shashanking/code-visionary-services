import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-title-sm font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-title-sm font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="block w-full bg-[#B5442C] text-white py-3 px-6 rounded-full hover:bg-[#9a3823] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
