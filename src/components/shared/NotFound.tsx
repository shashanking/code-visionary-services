import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Logo from "./Logo";

const NotFound: React.FC = () => {
  const quickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-12">
          <Link to="/" className="inline-block">
            <Logo variant="navbar" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="w-20 h-20 bg-[#B5442C] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">404</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We couldn't find the page you're looking for. It might have been
            moved, deleted, or you may have entered the wrong URL.
          </p>

          <div className="space-y-3">
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 bg-[#B5442C] text-white py-3 px-6 rounded-full hover:bg-[#9a3823] transition-colors font-semibold"
            >
              <Home size={20} />
              Return to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-100 transition-colors font-medium cursor-pointer"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
              >
                {link.icon && <link.icon size={16} />}
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Still lost?{" "}
            <a
              href="mailto:vikash@codevisionaryservices.com"
              className="text-[#B5442C] hover:underline font-medium"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
