import React, { useEffect, useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import bgImg from "../assets/contact_bg_image.png";
import bgImgInside from "../assets/contact_bg_image_inside.png";
import bgImgInsideMobile from "../assets/contact_bg_image_inside_mobile.png";

const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
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

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    if (date < today) return; // prevent selecting past dates
    setSelectedDate(date);
  };

  // Predefined time slots
  const timeSlots = ["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

  // Converting time
  const timeSlots24 = timeSlots.map((t) => {
    const [hourMin, ampm] = t.split(" ");
    const [hour, min] = hourMin.split(":").map(Number);
    let hour24 = hour;
    if (ampm === "PM" && hour !== 12) hour24 += 12;
    if (ampm === "AM" && hour === 12) hour24 = 0;
    return `${hour24.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}`;
  });

  // API call to schedule a call
  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and a time slot before scheduling.");
      return;
    }

    const scheduledData = {
      date: selectedDate.toDateString(),
      time: selectedTime,
    };

    console.log("Scheduled Call Details:", scheduledData);
    alert("Your call has been scheduled!");
  };

  return (
    <SectionContainer
      id="contact-section"
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
            Tell us a bit about your project and goals. We’ll get back within
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
                {/* CALENDAR SIDE */}
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-full rounded-xl shadow p-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <button
                        onClick={handlePrevMonth}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        ←
                      </button>
                      <h3 className="font-semibold text-[#B5442C]">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      <button
                        onClick={handleNextMonth}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        →
                      </button>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (d) => (
                          <div key={d} className="text-center">
                            {d}
                          </div>
                        )
                      )}
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 gap-1 text-sm">
                      {Array.from({ length: startDay }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {days.map((day) => {
                        const date = new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth(),
                          day
                        );
                        const isPast =
                          date < today &&
                          date.toDateString() !== today.toDateString();
                        const isSelected =
                          selectedDate?.toDateString() === date.toDateString();

                        return (
                          <button
                            key={day}
                            disabled={isPast}
                            onClick={() => handleDateSelect(day)}
                            className={`w-9 h-9 flex items-center justify-center rounded-full transition-all 
                              ${
                                isPast
                                  ? "text-gray-300 cursor-not-allowed"
                                  : isSelected
                                  ? "bg-[#B5442C] text-white font-bold"
                                  : "hover:bg-[#f4d6ce]"
                              }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time Slot Picker */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold mb-2 text-[#4F1E13]">
                        Select Time Slot
                      </h4>

                      {/* Predefined Slots */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                        {timeSlots.map((t, index) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(timeSlots24[index])}
                            className={`border rounded-lg py-1 text-sm transition-all cursor-pointer ${
                              selectedTime === timeSlots24[index]
                                ? "bg-[#B5442C] text-white font-semibold"
                                : "hover:bg-[#f4d6ce]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      {/* Manual Time Input */}
                      <h4 className="text-sm font-semibold mb-2 text-[#4F1E13]">
                        <span>OR</span>
                        <br />
                        Enter Manually
                      </h4>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="border rounded-lg p-2 text-sm w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full md:w-[3px] h-[3px] md:h-auto rounded-full bg-gradient-to-r from-[#B5442C] to-transparent md:bg-[linear-gradient(180deg,#B5442C_0%,rgba(240,240,240,0)_100%)] transition-all duration-300 mx-auto md:mx-6 lg:mx-10 my-4 md:my-0"></div>

                {/* INFO SIDE */}
                <div className="flex-1 flex flex-col justify-start text-left max-w-md">
                  <h3 className="font-heading text-[#161616] text-title-sm font-bold uppercase mb-1">
                    Call Us
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Prefer to talk? Give us a call—our team is happy to discuss
                    scope, timelines, and the best approach for your needs.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <p className="font-sans font-semibold text-[#303030] text-body2">
                      +91 8637515632
                    </p>
                  </div>

                  <h3 className="font-heading text-[#161616] text-title-sm font-bold uppercase mb-1">
                    Email
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Want to share docs or a brief? Email us and we’ll follow up
                    with a quick discovery call and a tailored proposal.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-sans font-semibold text-[#303030] text-body2">
                      office@codevisionaryservices.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Button */}
              <div className="mt-10 flex justify-center">
                <button
                  onClick={handleSchedule}
                  className="uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full
                  bg-[#B5442C] text-white px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C]
                  hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] transition-all duration-200 cursor-pointer"
                >
                  Schedule A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactSection;
