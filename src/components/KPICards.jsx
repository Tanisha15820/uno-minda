const colorStyles = {
  blue: "bg-[#e0f4fc] text-[#0b7aa8] border-[#20a8df]/30 shadow-[0_0_10px_rgba(32,168,223,0.15)]",
  glowingBlue: "bg-gradient-to-br from-[#e0f4fc] to-[#bae6fd] text-[#0284c7] border-[#20a8df]/40 shadow-[0_0_14px_rgba(32,168,223,0.28)]",
  cyan: "bg-[#f0f9ff] text-[#20a8df] border-[#38bdf8]/30",
  orange: "bg-[#fff7ed] text-[#ea580c] border-[#ea580c]/20",
  red: "bg-[#fff1f2] text-[#ff2e17] border-[#ff2e17]/25",
  purple: "bg-[#f3e8ff] text-[#9333ea] border-[#9333ea]/20",
  teal: "bg-[#e0f4fc] text-[#0b7aa8] border-[#20a8df]/30",
};

const KPICards = ({ data = [], gridClass }) => {
  return (
    <div
      className={`mb-6 grid gap-4 ${
        gridClass || "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      }`}
    >
      {data.map((item, index) => {
        const iconStyle = colorStyles[item.color] || colorStyles.blue;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#e2edf2] bg-white/85 backdrop-blur-md px-5 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20a8df]/40 hover:shadow-[0_8px_30px_rgba(32,168,223,0.14)]"
          >
            {/* Ambient top glowing line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#20a8df] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Main Content */}
            <div className="relative z-10 flex items-center">
              {/* Icon */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 shadow-xs ${iconStyle}`}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="ml-4 flex flex-col justify-center min-w-0">
                {/* Title */}
                <p className="text-xs font-medium text-[#64748b] truncate">
                  {item.title}
                </p>
                {/* Value */}
                <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-[#0f172a]">
                  {item.value}
                </h2>

                {/* Trend */}
                {item.trend && (
                  <div className="mt-1 flex items-center whitespace-nowrap text-[11px] font-semibold text-[#0284c7]">
                    <span className="mr-1">↑</span>
                    <span>{item.trend}</span>
                    <span className="ml-1 font-normal text-[#94a3b8]">
                      vs last 7 days
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;
