
import EventBusyIcon from "@mui/icons-material/EventBusy";
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
import mockAbsenteeism from "../../data/absenteeism.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = mockAbsenteeism.labels;

const chartData = {
  labels,
  datasets: [
    {
      label: "Absenteeism",
      data: mockAbsenteeism.values,
      backgroundColor: "#f59e0b",

      // Fixed thin bar width
      barThickness: 25,

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

    // Data number on top of every bar
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

      barPercentage: 0.98,
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

const Absentism = () => {
  return (
    <div className="bg-white/85 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#e2edf2] shadow-[0_4px_24px_rgba(15,23,42,0.03)] overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Icon - glowing blue */}
            <div className="w-10 h-10 rounded-xl bg-[#e0f4fc] border border-[#20a8df]/30 flex items-center justify-center text-[#0b7aa8] shadow-[0_0_12px_rgba(32,168,223,0.18)]">
              <EventBusyIcon sx={{ fontSize: 20, color: "#20a8df" }} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#0f172a]">
                Daily Absenteeism
              </h2>

              <p className="text-xs text-[#64748b] mt-0.5">
                Tracking planned vs unplanned absenteeism movement
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
            minWidth: "1600px",
          }}
        >
          <Bar data={chartData} options={options} />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-4 pb-4">
        {/* Absent Employees */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
          <span className="text-xs font-medium text-slate-500">
            Absent Employees
          </span>
        </div>
      </div>
    </div>
  );
};

export default Absentism;

