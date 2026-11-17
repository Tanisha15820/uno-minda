import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import mockDailyManpower from "../../data/dailyManpower.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
);

// Chart labels from JSON
const labels = mockDailyManpower.labels;

// Chart data from JSON
const chartData = {
  labels,
  datasets: [
    {
      label: "Actual",
      data: mockDailyManpower.actual,
      backgroundColor: "#13B8FF",
      hoverBackgroundColor: "#38bdf8",

      // Rounded only at top
      borderRadius: {
        topLeft: 6,
        topRight: 6,
        bottomLeft: 0,
        bottomRight: 0,
      },

      // Bottom remains straight
      borderSkipped: "bottom",
    },

    {
      label: "Present",
      data: mockDailyManpower.present,
      backgroundColor: "#20a8df",
      hoverBackgroundColor: "#38bdf8",
      borderRadius: {
        topLeft: 6,
        topRight: 6,
        bottomLeft: 0,
        bottomRight: 0,
      },

      borderSkipped: "bottom",
    },

    {
      label: "Requirement",
      data: mockDailyManpower.requirement,
      backgroundColor: "#f59e0b",

      borderRadius: {
        topLeft: 6,
        topRight: 6,
        bottomLeft: 0,
        bottomRight: 0,
      },

      borderSkipped: "bottom",
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index",
    intersect: false,
  },

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      enabled: false,
      external: () => { },
    },

    datalabels: {
      display: true,
      anchor: "end",
      align: "top",
      offset: 4,
      color: "#334155",
      font: {
        size: 10,
        weight: "600",
        family: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      },
      formatter: (value) => value,
    },
  },

  scales: {
    x: {
      offset: true,

      // Vertical lines removed
      grid: {
        display: false,
        drawBorder: false,
      },

      border: {
        display: false,
      },

      barPercentage: 0.3,
      categoryPercentage: 0.4,

      ticks: {
        color: "#64748B",

        font: {
          size: 10,
          weight: "500",
        },

        padding: 5,
      },
    },

    y: {
      beginAtZero: true,
      max: 120,

      ticks: {
        stepSize: 20,
        color: "#64748B",

        font: {
          size: 9,
        },

        padding: 8,
      },

      grid: {
        display: false,
        color: "#e8f1f5",
        drawTicks: false,
      },

      border: {
        display: false,
      },
    },
  },
};

const DailyManpower = () => {
  return (
    <div className="bg-white/85 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#e2edf2] shadow-[0_4px_24px_rgba(15,23,42,0.03)] overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-2">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e0f4fc] border border-[#20a8df]/30 flex items-center justify-center text-[#0b7aa8] shadow-[0_0_12px_rgba(32,168,223,0.18)]">
              <PeopleAltIcon sx={{ fontSize: 20, color: "#20a8df" }} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#0f172a]">
                Daily Manpower Dashboard
              </h2>

              <p className="text-xs text-[#64748b] mt-0.5">
                Deployed headcount with day-over-day movement
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Chart */}
      <div
        className="
          px-4
          pb-3
          pt-2
          overflow-x-auto
          scrollbar-thin
          scrollbar-thumb-slate-300
          scrollbar-track-transparent
        "
      >
        <div
          className="h-[230px]"
          style={{
            minWidth: "1100px",
          }}
        >
          <Bar data={chartData} options={options} />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-5 pb-4">
        {/* Actual */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#13B8FF]"></span>

          <span className="text-xs font-medium text-slate-500">
            Actual
          </span>
        </div>

        {/* Present */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#20a8df] shadow-[0_0_6px_#20a8df]"></span>

          <span className="text-xs font-medium text-slate-500">
            Present
          </span>
        </div>

        {/* Requirement */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>

          <span className="text-xs font-medium text-slate-500">
            Requirement
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyManpower;