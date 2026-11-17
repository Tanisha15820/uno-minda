export const CHART_COLORS = {
  primary: '#20a8df',      // Exact glowing blue from Uno Minda logo
  secondary: '#38bdf8',    // Bright electric sky blue
  glow: '#13B8FF',         // Vivid glow highlight
  dark: '#0b7aa8',         // Deep contrast blue
  amber: '#f59e0b',
  pink: '#ec4899',
  purple: '#9333ea',
  red: '#ff2e17',          // Exact red arrow color from logo
  green: '#10b981',
  blue: '#20a8df',
  slate: '#64748b',
};

export const getBarChartOptions = (customOptions = {}) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 11,
            family: 'Inter, sans-serif',
          },
        },
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0f172a',
        borderColor: '#20a8df',
        borderWidth: 1,
        titleFont: { size: 12, family: 'Inter, sans-serif' },
        bodyFont: { size: 11, family: 'Inter, sans-serif' },
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 10, family: 'Inter, sans-serif' },
          color: '#64748b',
        },
      },
      y: {
        grid: {
          color: '#f1f5f9',
        },
        ticks: {
          stepSize: customOptions.yStepSize || 20,
          font: { size: 10, family: 'Inter, sans-serif' },
          color: '#64748b',
        },
      },
    },
    ...customOptions,
  };
};

export const createBarDataset = ({
  label,
  data,
  color,
  hoverColor,
  borderRadius = 6,
  barThickness = 24,
}) => {
  return {
    label,
    data,
    backgroundColor: color || CHART_COLORS.primary,
    hoverBackgroundColor: hoverColor || color || CHART_COLORS.secondary,
    borderRadius: typeof borderRadius === 'number' ? {
      topLeft: borderRadius,
      topRight: borderRadius,
      bottomLeft: 0,
      bottomRight: 0,
    } : borderRadius,
    borderSkipped: 'bottom',
    barThickness,
  };
};

export default {
  CHART_COLORS,
  getBarChartOptions,
  createBarDataset,
};
