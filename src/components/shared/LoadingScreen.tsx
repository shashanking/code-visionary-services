import React from "react";

const LoadingScreen: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F0F0F0]">
            <div className="w-12 h-12 border-4 border-[#B5442C] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingScreen;
