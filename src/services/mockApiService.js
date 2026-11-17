import plantsData from '../data/plants.json';
import departmentsData from '../data/departments.json';
import subDepartmentsData from '../data/subDepartments.json';
import linesData from '../data/lines.json';
import machinesData from '../data/machines.json';
import kpiData from '../data/kpiData.json';
import dailyManpowerData from '../data/dailyManpower.json';
import attritionData from '../data/attrition.json';
import absenteeismData from '../data/absenteeism.json';
import dailySalaryData from '../data/dailySalary.json';
import dojoTrendData from '../data/dojoTrend.json';
import skillDistributionData from '../data/skillDistribution.json';
import genderDistributionData from '../data/genderDistribution.json';
import attendanceRecordsData from '../data/attendanceRecords.json';
import requirementRecordsData from '../data/requirementRecords.json';

// Helper for simulated network delay (client demo feel)
const delay = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export const PlantApi = {
  getPlants: async () => {
    await delay(120);
    return { data: plantsData };
  },
};

export const DepartmentApi = {
  getDepartments: async () => {
    await delay(100);
    return { data: departmentsData };
  },
};

export const SubDepartmentApi = {
  getSubDepartments: async () => {
    await delay(100);
    return { data: subDepartmentsData };
  },
};

export const LinesApi = {
  getLines: async () => {
    await delay(100);
    return { data: linesData };
  },
};

export const MachinesApi = {
  getMachines: async () => {
    await delay(100);
    return { data: machinesData };
  },
};

export const DashboardApi = {
  getKPIs: async () => {
    await delay(100);
    return { data: kpiData };
  },
  getDailyManpower: async () => {
    await delay(100);
    return { data: dailyManpowerData };
  },
  getAttrition: async () => {
    await delay(100);
    return { data: attritionData };
  },
  getAbsenteeism: async () => {
    await delay(100);
    return { data: absenteeismData };
  },
  getDailySalary: async () => {
    await delay(100);
    return { data: dailySalaryData };
  },
  getDojoTrend: async () => {
    await delay(100);
    return { data: dojoTrendData };
  },
  getSkillDistribution: async () => {
    await delay(100);
    return { data: skillDistributionData };
  },
  getGenderDistribution: async () => {
    await delay(100);
    return { data: genderDistributionData };
  },
  getAttendanceRecords: async () => {
    await delay(100);
    return { data: attendanceRecordsData };
  },
  getRequirementRecords: async () => {
    await delay(100);
    return { data: requirementRecordsData };
  },
};

export default {
  PlantApi,
  DepartmentApi,
  SubDepartmentApi,
  LinesApi,
  MachinesApi,
  DashboardApi,
};
