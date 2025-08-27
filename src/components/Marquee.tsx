import React from "react";

const Marquee: React.FC = () => {
  const updates = [
    "🔥 Current Batch: July 2025 – Limited Seats!",
    "📢 Workshop on React & TypeScript this weekend!",
    "✅ Admissions open for next month’s batch.",
    "🏆 Congratulations to last batch toppers!"
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 text-xs md:text-sm py-1">
      <div className="flex whitespace-nowrap animate-marquee">
        {updates.map((item, idx) => (
          <span key={idx} className="mx-4 shrink-0">
            {item}
          </span>
        ))}
        {/* Repeat items for seamless loop */}
        {updates.map((item, idx) => (
          <span key={`repeat-${idx}`} className="mx-4 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
