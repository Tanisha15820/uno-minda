import { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DailyManpower from "../components/DailyManpower";
import KPICards from "../../components/KPICards";
import Filters from "../../components/Filters";
import Attrition from "../components/Attrition";
import Absentism from "../components/Absentism";
import DailySalary from "../components/DailySalary";
import DojoManpowerTrend from "../components/DojoManpowerTrend";
import SkillLevelDistribution from "../components/SkillLevelDistribution";
import GenderDistribution from "../components/GenderDistribution";
import GenderAttendance from "../components/GenderAttendance";
import { dashboardMenus } from "../data/DashboardMenu";
import kpiDataList from "../../data/kpiData.json";

const kpiIcons = [
  <GroupsOutlinedIcon sx={{ fontSize: 22 }} />,
  <PersonOutlinedIcon sx={{ fontSize: 22 }} />,
  <SignalCellularAltRoundedIcon sx={{ fontSize: 22 }} />,
  <PeopleAltOutlinedIcon sx={{ fontSize: 22 }} />,
];

const kpiData = kpiDataList.map((item, index) => ({
  ...item,
  icon: kpiIcons[index % kpiIcons.length],
}));

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [filterValues, setFilterValues] = useState({});

  return (
    <div className="flex h-screen bg-[#F7F7F5] overflow-hidden">
      <Sidebar
        menuItems={dashboardMenus}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="sticky top-0 z-30 bg-white shadow-sm">
          <Navbar setMobileOpen={setMobileOpen} activeMenu={activeMenu} />
        </div>

        <main className="flex-1 overflow-y-auto px-6 pt-5 pb-8 space-y-6">
          <KPICards data={kpiData} />
          <Filters values={filterValues} onChange={setFilterValues} />
          <DailyManpower />
          <div className="grid gap-6 lg:grid-cols-2">
            <Attrition />
            <Absentism />
          </div>
          <DailySalary />
          <DojoManpowerTrend />
          <SkillLevelDistribution />
          <div className="grid gap-6 lg:grid-cols-2">
            <GenderDistribution />
            <GenderAttendance />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
