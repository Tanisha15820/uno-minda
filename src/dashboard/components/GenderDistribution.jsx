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
import mockGenderDistribution from "../../data/genderDistribution.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = mockGenderDistribution.labels;

const chartData = {
  labels,

  datasets: [
    {
      label: "Female",
      data: mockGenderDistribution.female,
      backgroundColor: "#ec4899",
      barThickness: 20,
      borderRadius: {
        topLeft: 5,
        topRight: 5,
        bottomLeft: 0,
        bottomRight: 0,
      },
      borderSkipped: "bottom",
    },
    {
      label: "Male",
      data: mockGenderDistribution.male,
      backgroundColor: "#20a8df",
      barThickness: 20,
      borderRadius: {
        topLeft: 5,
        topRight: 5,
        bottomLeft: 0,
        bottomRight: 0,
      },
      borderSkipped: "bottom",
    },
  ],
};

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

      grid: {
        display: false,
        drawBorder: false,
      },

      border: {
        display: false,
      },

      /*
        Fixed bar width = 22px

        The white left/right borders create
        a visible gap between Female and Male.

        categoryPercentage controls the spacing
        between date groups and is kept at 0.4
        so the date-group spacing remains.
      */
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

      max: 80,

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

const GenderDistribution = () => {
  return (
    <div className="bg-white/85 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#e2edf2] shadow-[0_4px_24px_rgba(15,23,42,0.03)] overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#e0f4fc] border border-[#20a8df]/30 flex items-center justify-center text-[#0b7aa8] shadow-[0_0_12px_rgba(32,168,223,0.18)]">
              <PeopleAltIcon sx={{ fontSize: 20, color: "#20a8df" }} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#0f172a]">
                Gender Distribution
              </h2>

              <p className="text-xs text-[#64748b] mt-0.5">
                Deployed headcount with day-over-day movement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Chart */}
      <div className="px-4 pb-4 pt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        <div
          className="h-[230px]"
          style={{
            minWidth: "2016px",
          }}
        >
          <Bar data={chartData} options={options} />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-4 pb-4">
        {/* Female */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fb7185]"></span>

          <span className="text-xs font-medium text-slate-500">
            Female
          </span>
        </div>

        {/* Male */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#20a8df] shadow-[0_0_6px_#20a8df]"></span>

          <span className="text-xs font-medium text-slate-500">
            Male
          </span>
        </div>
      </div>
    </div>
  );
};

export default GenderDistribution;