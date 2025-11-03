import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC<{ pageName?: string }> = ({ pageName = "page" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🚧</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          The {pageName} is currently under development. We're working hard to
          bring you this content soon!
        </p>
        <div className="space-y-3">
          <Link
            to="/blogs"
            className="block w-full bg-[#B5442C] text-white py-3 px-6 rounded-full hover:bg-[#9a3823] transition-colors"
          >
            Back to Blogs
          </Link>
          <Link
            to="/"
            className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
