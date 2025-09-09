import React, { useState, type FC } from "react";

const ProjectButton: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
            <button
                className="relative group w-96 h-16 rounded-full overflow-hidden transition-all duration-700 ease-out hover:-translate-y-0.5"
                style={{
                    background: isHovered
                        ? "linear-gradient(135deg, #b22222 0%, #d63d2e 50%, #ff3b2e 100%)"
                        : "#000000",
                    boxShadow: isHovered
                        ? "0 10px 25px -5px rgba(178, 34, 34, 0.4), 0 5px 10px -5px rgba(178, 34, 34, 0.3)"
                        : "0 5px 15px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Glowing border */}
                <div
                    className={`absolute -inset-0.5 rounded-full blur-md transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(255,80,80,0.9), rgba(255,50,50,0.7), rgba(180,30,30,0.9))",
                    }}
                />

                {/* Button content */}
                <div className="relative flex items-center justify-center h-full rounded-full">
                    {/* Text container */}
                    <div className="relative overflow-hidden mr-4">
                        {/* Default text */}
                        <span
                            className={`block text-white text-lg transition-all duration-500 ease-out ${isHovered
                                    ? "-translate-x-full opacity-0"
                                    : "translate-x-0 opacity-100"
                                }`}
                            style={{
                                fontFamily: '"Audiowide", cursive, sans-serif',
                                fontWeight: "400",
                                letterSpacing: "0.15em",
                            }}
                        >
                            START A PROJECT
                        </span>

                        {/* Hover text sliding in from right */}
                        <span
                            className={`absolute top-0 left-0 text-white text-lg transition-all duration-500 ease-out ${isHovered
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0"
                                }`}
                            style={{
                                fontFamily: '"Audiowide", cursive, sans-serif',
                                fontWeight: "400",
                                letterSpacing: "0.15em",
                            }}
                        >
                            START A PROJECT
                        </span>
                    </div>

                    {/* Arrow container */}
                    <div className="relative w-6 h-6 overflow-hidden">
                        {/* Default arrow */}
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered
                                    ? "-translate-y-full opacity-0"
                                    : "translate-y-0 opacity-100"
                                }`}
                        >
                            <ArrowIcon />
                        </div>

                        {/* Hover arrow sliding in from bottom */}
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-full opacity-0"
                                }`}
                        >
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
};

const ArrowIcon: React.FC = () => (
    <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(315deg)" }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
    </svg>
);

export default ProjectButton;
