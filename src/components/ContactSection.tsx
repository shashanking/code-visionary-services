import React, { useEffect, useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import bgImg from "../assets/contact_bg_image.png";
import bgImgInside from "../assets/contact_bg_image_inside.png";
import bgImgInsideMobile from "../assets/contact_bg_image_inside_mobile.png";
import {
  BadgeCheck,
  CalendarCheck,
  Mail,
  Phone,
  Send,
  ServerCrash,
} from "lucide-react";

// Type definitions
interface ScheduledData {
  name: string;
  email: string;
  message: string;
  date: string;
  time: string;
  timestamp: string;
}

interface ApiResponse {
  success: boolean;
  data: ScheduledData;
}

// 1: Calendar, 2: Details, 3: Confirmation, 4: Error
type Step = 1 | 2 | 3 | 4;

const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const today = new Date();

  // Update mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calendar Helpers
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );

  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const daysInMonth = endOfMonth.getDate();
  const startDay = startOfMonth.getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = (): void => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = (): void => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const isSameOrAfterToday = (date: Date): boolean => {
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);
    return date >= todayMidnight;
  };

  const handleDateSelect = (day: number): void => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    if (!isSameOrAfterToday(date)) return;
    setSelectedDate(date);
  };

  // Predefined time slots
  const timeSlots: string[] = ["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

  // Converting time
  const timeSlots24: string[] = timeSlots.map((t) => {
    const [hourMin, ampm] = t.split(" ");
    const [hour, min] = hourMin.split(":").map(Number);
    let hour24 = hour;
    if (ampm === "PM" && hour !== 12) hour24 += 12;
    if (ampm === "AM" && hour === 12) hour24 = 0;
    return `${hour24.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}`;
  });

  // Validation
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Check if selected time is in the past
  const isSelectedTimeInPast = (): boolean => {
    if (!selectedDate || !selectedTime) return false;

    const now = new Date();
    const [hour, minute] = selectedTime.split(":").map(Number);
    const scheduled = new Date(selectedDate);
    scheduled.setHours(hour, minute, 0, 0);

    return scheduled < now;
  };

  // Handle next step with time validation
  const handleNextStep = (): void => {
    if (currentStep === 1) {
      if (!selectedDate || !selectedTime) {
        alert("Please select both a date and a time slot before proceeding.");
        return;
      }

      // Check if selected time is in the past
      if (isSelectedTimeInPast()) {
        alert(
          "You cannot select a past time. Please choose a future date and time."
        );
        return;
      }

      setCurrentStep(2);
    }
  };

  // Handle back step
  const handleBackStep = (): void => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 4) {
      // If there's an error, go back to details form
      setCurrentStep(2);
    }
  };

  // Mock API call
  const scheduleCallAPI = async (
    scheduledData: ScheduledData
  ): Promise<ApiResponse> => {
    // Simulate API call with random success/failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1; // Close to 0 success rate and to 1 failed
        if (isSuccess) {
          resolve({ success: true, data: scheduledData });
        } else {
          reject(new Error("Failed to schedule call. Please try again."));
        }
      }, 1000);
    });
  };

  // API call to schedule a call
  const handleSchedule = async (): Promise<void> => {
    // Validate all required fields
    if (!userName.trim()) {
      alert("Please enter your full name before scheduling.");
      return;
    }

    if (!userEmail.trim()) {
      alert("Please enter your email address before scheduling.");
      return;
    }

    if (!validateEmail(userEmail)) {
      alert("Please enter a valid email address before scheduling.");
      return;
    }

    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and a time slot before scheduling.");
      return;
    }

    // Check if selected time is in the past
    if (isSelectedTimeInPast()) {
      alert(
        "You cannot select a past time. Please choose a future date and time."
      );
      return;
    }

    const scheduledData: ScheduledData = {
      name: userName,
      email: userEmail,
      message: userMessage,
      date: selectedDate.toDateString(),
      time: selectedTime,
      timestamp: new Date().toISOString(),
    };

    console.log("Scheduled Call Details:", scheduledData);

    setIsSubmitting(true);

    try {
      // API call
      await scheduleCallAPI(scheduledData);

      // If API call is successful
      setCurrentStep(3);
    } catch (error) {
      // If API call fails
      console.error("API Error:", error);
      setCurrentStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = (): void => {
    setSelectedDate(null);
    setSelectedTime("");
    setUserName("");
    setUserEmail("");
    setUserMessage("");
    setCurrentStep(1);
  };

  const tryAgain = (): void => {
    // Go back to details form to try again
    setCurrentStep(2);
  };

  return (
    <SectionContainer
      id="contact"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#F0F0F0] flex justify-center items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Content */}
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <h2 className="font-heading font-bold text-title-md text-center uppercase mb-6 leading-tight max-w-sm bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
            Let's Get In Touch
          </h2>

          <p className="font-sans font-normal text-body1 text-[#303030] leading-[1.5] text-center max-w-md mb-6">
            Tell us a bit about your project and goals. We'll get back within
            one business day with next steps and a clear plan to move forward.
          </p>

          {/* Main Contact Card */}
          <div className="relative w-full rounded-[22px] overflow-hidden p-[2px] bg-gradient-to-r from-[#2B7EE0] to-[#B5442C] flex justify-center items-center">
            <div
              className="relative w-full rounded-[20px] bg-white bg-opacity-95 p-4 md:p-8 shadow-[0_8px_32px_rgba(44,62,80,0.13)] flex flex-col items-stretch justify-between overflow-hidden"
              style={{
                backgroundImage: `url(${
                  isMobile ? bgImgInsideMobile : bgImgInside
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex flex-col md:flex-row">
                {/* LEFT SIDE */}
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-full rounded-xl shadow p-4">
                    {/* Calendar & Time Selection */}
                    {currentStep === 1 && (
                      <>
                        {/* Calendar Header */}
                        <div className="flex justify-between items-center mb-4">
                          <button
                            onClick={handlePrevMonth}
                            className="w-[50px] border p-0.25 sm:p-0.5 rounded-full text-[#161616] hover:bg-[#f4d6ce] cursor-pointer"
                          >
                            ←
                          </button>
                          <h3 className="text-body1 font-sans font-semibold text-[#4F1E13]">
                            {currentMonth.toLocaleString("default", {
                              month: "long",
                              year: "numeric",
                            })}
                          </h3>
                          <button
                            onClick={handleNextMonth}
                            className="w-[50px] border p-0.25 sm:p-0.5 rounded-full text-[#161616] hover:bg-[#f4d6ce] cursor-pointer"
                          >
                            →
                          </button>
                        </div>

                        {/* Weekdays */}
                        <div className="grid grid-cols-7 text-[#161616] mb-2 text-body1 font-sans">
                          {[
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ].map((d) => (
                            <div key={d} className="text-center">
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Days */}
                        <div className="grid grid-cols-7 gap-1 text-body1 font-sans">
                          {Array.from({ length: startDay }).map((_, i) => (
                            <div
                              key={`empty-${i}`}
                              className="flex justify-center items-center"
                            />
                          ))}
                          {days.map((day) => {
                            const date = new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth(),
                              day
                            );
                            const isPast =
                              date <
                              new Date(
                                today.getFullYear(),
                                today.getMonth(),
                                today.getDate()
                              );

                            const isSelected =
                              selectedDate?.toDateString() ===
                              date.toDateString();

                            return (
                              <div
                                key={day}
                                className="flex justify-center items-center"
                              >
                                <button
                                  disabled={isPast}
                                  onClick={() => handleDateSelect(day)}
                                  className={`w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full transition-all 
                                    ${
                                      isPast
                                        ? "text-gray-300 cursor-not-allowed"
                                        : isSelected
                                        ? "bg-[#B5442C] text-white font-bold cursor-pointer"
                                        : "text-[#161616] hover:bg-[#f4d6ce] cursor-pointer"
                                    }`}
                                >
                                  {day}
                                </button>
                              </div>
                            );
                          })}
                        </div>

                        {/* Time Slot Picker */}
                        <div className="mt-8">
                          <h4 className="text-body1 font-sans font-semibold mb-2 text-[#4F1E13]">
                            Select Time Slot
                          </h4>

                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                            {timeSlots.map((t, index) => (
                              <button
                                key={t}
                                onClick={() =>
                                  setSelectedTime(timeSlots24[index])
                                }
                                className={`border rounded-lg py-1 text-body2 transition-all cursor-pointer ${
                                  selectedTime === timeSlots24[index]
                                    ? "bg-[#B5442C] border-[#B5442C] text-white font-semibold"
                                    : "text-[#161616] hover:bg-[#f4d6ce]"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>

                          <h4 className="text-body1 font-sans font-semibold mb-2 text-[#4F1E13]">
                            <span>OR</span>
                            <br />
                            Enter Manually
                          </h4>
                          <input
                            type="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className={`border rounded-lg p-2 text-body2 text-[#161616] w-full cursor-pointer hover:border-[#B5442C] focus:border-[#B5442C] focus:ring-1 focus:ring-[#B5442C] outline-none transition-all duration-100`}
                          />
                        </div>
                      </>
                    )}

                    {/* User Details Form */}
                    {currentStep === 2 && (
                      <div className="w-full">
                        <h3 className="text-body1 font-sans font-semibold mb-4 text-[#4F1E13]">
                          About You
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block font-sans text-body2 font-medium text-[#161616] mb-1 text-left">
                              Full Name{" "}
                              <span className="text-[#B5442C]">*</span>
                            </label>
                            <input
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder="Enter your full name"
                              className="w-full px-3 py-2 text-body2 text-[#161616] border rounded-lg focus:border-[#B5442C] focus:ring-1 focus:ring-[#B5442C] outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block font-sans text-body2 font-medium text-[#161616] mb-1 text-left">
                              Email Address{" "}
                              <span className="text-[#B5442C]">*</span>
                            </label>
                            <input
                              type="email"
                              value={userEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                              placeholder="your.email@company.com"
                              className="w-full px-3 py-2 text-body2 text-[#161616] border rounded-lg focus:border-[#B5442C] focus:ring-1 focus:ring-[#B5442C] outline-none transition-all"
                            />
                            {/* {userEmail && !validateEmail(userEmail) && (
                              <p className="text-red-500 text-xs mt-1 text-left">
                                Please enter a valid email address
                              </p>
                            )} */}
                          </div>

                          <div>
                            <label className="block font-sans text-body2 font-medium text-[#161616] mb-1 text-left">
                              Project Details (Optional)
                            </label>
                            <textarea
                              value={userMessage}
                              onChange={(e) => setUserMessage(e.target.value)}
                              placeholder="Briefly describe your project or what you'd like to discuss..."
                              rows={3}
                              className="w-full px-3 py-2 text-body2 text-[#161616] border rounded-lg focus:border-[#B5442C] focus:ring-1 focus:ring-[#B5442C] outline-none transition-all resize-none"
                            />
                          </div>

                          {/* Selected Time Display */}
                          <div className="bg-gray-50 rounded-lg p-3">
                            <h4 className="font-sans font-semibold text-[#161616] mb-1 text-body2">
                              Selected Time:
                            </h4>
                            <p className="text-[#161616] font-sans text-body2">
                              {selectedDate?.toLocaleDateString()} at{" "}
                              {selectedTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Success Confirmation */}
                    {currentStep === 3 && (
                      <div className="w-full text-center py-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-title-lg text-green-600">
                            <BadgeCheck className="w-6 h-6" />
                          </span>
                        </div>
                        <h3 className="text-body1 font-sans font-semibold mb-2 text-[#4F1E13]">
                          Call Scheduled Successfully!
                        </h3>
                        <p className="text-[#161616] font-sans text-body2 mb-4">
                          We've sent a confirmation to{" "}
                          <strong>{userEmail}</strong>
                        </p>

                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <p className="font-sans font-semibold text-body2 text-[#4F1E13]">
                            Your Schedule:
                          </p>
                          <p className="text-[#161616] font-sans text-body2">
                            {selectedDate?.toLocaleDateString()} at{" "}
                            {selectedTime}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Error State - if api call fails */}
                    {/* {currentStep === 4 && (
                      <div className="w-full text-center py-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-title-lg text-red-600"><ServerCrash className="w-8 h-8"/></span>
                        </div>
                        <h3 className="text-body1 font-sans font-semibold mb-2 text-[#4F1E13]">
                          Scheduling Failed!
                        </h3>
                        <p className="text-[#161616] font-sans text-body2 mb-4">
                          We encountered an issue while scheduling your call.
                          Please try again or contact us directly.
                        </p>

                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <p className="font-sans font-semibold text-body2 text-[#4F1E13]">
                            Your Selected Time:
                          </p>
                          <p className="text-[#161616] font-sans text-body2">
                            {selectedDate?.toLocaleDateString()} at{" "}
                            {selectedTime}
                          </p>
                        </div>
                      </div>
                    )} */}

                    {currentStep === 4 && (
                      <div className="w-full text-center py-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-title-md text-red-600">
                            <ServerCrash className="w-8 h-8" />
                          </span>
                        </div>
                        <h3 className="text-body1 font-sans font-semibold mb-2 text-[#4F1E13]">
                          Scheduling Temporarily Unavailable!
                        </h3>

                        <div className="mb-4">
                          <p className="text-[#161616] font-sans text-body2 text-center md:text-left">
                            Our online scheduling system is currently under
                            development.{" "}
                            <strong>Please contact us directly</strong> to
                            schedule your call using the information{" "}
                            <span className="hidden md:inline">
                              on the right.
                            </span>
                            <span className="inline md:hidden">below.</span>
                          </p>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-200">
                          <p className="font-sans font-semibold text-body2 text-[#4F1E13] mb-2">
                            Your Selected Time:
                          </p>
                          <p className="text-[#161616] font-sans text-body2">
                            {selectedDate?.toLocaleDateString()} at{" "}
                            {selectedTime}
                          </p>
                          <p className="text-[#161616] font-sans text-body2 mt-2">
                            Please mention this preferred time when you contact
                            us.
                          </p>
                        </div>

                        <p className="text-[#161616] font-sans text-body2 mt-4">
                          We apologize for the inconvenience. Online scheduling
                          will be available soon!
                        </p>
                      </div>
                    )}

                    {/* Inside schedule call button for smaller screen */}
                    <div className="flex md:hidden justify-center mt-10">
                      {currentStep === 1 && (
                        <button
                          onClick={handleNextStep}
                          className="flex items-center justify-center gap-3 uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                        >
                          Schedule A Call
                          <Send className="w-4 md:w-5 h-4 md:h-5" />
                        </button>
                      )}

                      {currentStep === 2 && (
                        <div className="flex flex-col xs:flex-row gap-4 w-full sm:w-auto">
                          <button
                            onClick={handleBackStep}
                            className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full border-2 border-[#B5442C] text-[#B5442C] px-6 md:px-10 py-1 md:py-2 hover:bg-[#f4d6ce] transition-all duration-200 cursor-pointer"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleSchedule}
                            disabled={isSubmitting}
                            className={`flex justify-center items-center gap-3 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 ${
                              isSubmitting
                                ? "bg-[#B5442C80] text-white cursor-not-allowed"
                                : "bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                            }`}
                          >
                            {isSubmitting ? (
                              "Booking..."
                            ) : (
                              <>
                                Book The Slot
                                <CalendarCheck className="w-4 md:w-5 h-4 md:h-5" />
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <button
                          onClick={resetForm}
                          className="uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full bg-[#B5442C] text-white px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] transition-all duration-200 cursor-pointer"
                        >
                          Schedule Another Call
                        </button>
                      )}

                      {currentStep === 4 && (
                        <div className="flex flex-col xs:flex-row gap-4 w-full sm:w-auto">
                          <button
                            onClick={handleBackStep}
                            className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full border-2 border-[#B5442C] text-[#B5442C] px-6 md:px-10 py-1 md:py-2 hover:bg-[#f4d6ce] transition-all duration-200 cursor-pointer"
                          >
                            Back to Edit
                          </button>
                          <button
                            onClick={tryAgain}
                            className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                          >
                            Try Again
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full md:w-[3px] h-[3px] md:h-auto rounded-full bg-gradient-to-r from-[#B5442C] to-transparent md:bg-[linear-gradient(180deg,#B5442C_0%,rgba(240,240,240,0)_100%)] transition-all duration-300 mx-auto md:mx-6 lg:mx-10 my-8 md:my-0"></div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex flex-col justify-start text-left max-w-md">
                  <h3 className="font-heading text-[#161616] text-title-sm font-bold uppercase mb-1">
                    Call Us
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Prefer to talk? Give us a call—our team is happy to discuss
                    scope, timelines, and the best approach for your needs.
                  </p>
                  <div className="flex items-center mb-6">
                    <p className="flex items-center justify-center gap-3 font-sans font-semibold text-[#303030] text-body2">
                      <Phone className="w-4 md:w-5 h-4 md:h-5" /> +91 8637515632
                    </p>
                  </div>

                  <h3 className="font-heading text-[#161616] text-title-sm font-bold uppercase mb-1">
                    Email
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Want to share docs or a brief? Email us and we'll follow up
                    with a quick discovery call and a tailored proposal.
                  </p>
                  <div className="flex items-center">
                    <p className="flex items-center justify-center gap-3 font-sans font-semibold text-[#303030] text-body2">
                      <Mail className="w-4 md:w-5 h-4 md:h-5" />
                      office@codevisionaryservices.com
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM BUTTONS SECTION */}
              <div className="hidden md:flex justify-center mt-10">
                {currentStep === 1 && (
                  <button
                    onClick={handleNextStep}
                    className="flex items-center justify-center gap-3 uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                  >
                    Schedule A Call
                    <Send className="w-4 md:w-5 h-4 md:h-5" />
                  </button>
                )}

                {currentStep === 2 && (
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button
                      onClick={handleBackStep}
                      className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full border-2 border-[#B5442C] text-[#B5442C] px-6 md:px-10 py-1 md:py-2 hover:bg-[#f4d6ce] transition-all duration-200 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSchedule}
                      disabled={isSubmitting}
                      className={`flex justify-center items-center gap-3 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 ${
                        isSubmitting
                          ? "bg-[#B5442C80] text-white cursor-not-allowed"
                          : "bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? (
                        "Booking..."
                      ) : (
                        <>
                          Book The Slot
                          <CalendarCheck className="w-4 md:w-5 h-4 md:h-5" />
                        </>
                      )}
                    </button>
                  </div>
                )}

                {currentStep === 3 && (
                  <button
                    onClick={resetForm}
                    className="uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full bg-[#B5442C] text-white px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] transition-all duration-200 cursor-pointer"
                  >
                    Schedule Another Call
                  </button>
                )}

                {currentStep === 4 && (
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button
                      onClick={handleBackStep}
                      className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full border-2 border-[#B5442C] text-[#B5442C] px-6 md:px-10 py-1 md:py-2 hover:bg-[#f4d6ce] transition-all duration-200 cursor-pointer"
                    >
                      Back to Edit
                    </button>
                    <button
                      onClick={tryAgain}
                      className="flex-1 sm:flex-none uppercase font-heading font-bold text-body1 rounded-full px-6 md:px-10 py-1 md:py-2 transition-all duration-200 bg-[#B5442C] text-white shadow-[0px_0px_8px_#B5442C] hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] cursor-pointer"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactSection;
