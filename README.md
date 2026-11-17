# Uno Minda - Pune Plant Operations Dashboard

A clean, standalone, fully mock-driven React.js dashboard for **Uno Minda (Pune Plant)** operations management, attendance monitoring, and manpower requirement forecasting.

## 🚀 Features

- **Executive KPI Cards**: Real-time summary metrics for Total Manpower, Present Employees, Attendance Rate, and DOJO Trainees.
- **Dynamic Multi-Level Filters**: Cascading filters for Plants, Departments, Sub-departments, Lines, Machines, Shifts, and Custom Date Ranges.
- **Interactive Analytics Charts**:
  - Daily Manpower (Actual vs Present vs Requirement)
  - Attrition by Level (Monthly trend)
  - Daily Absenteeism
  - Daily Regular Wages & Salary distribution
  - DOJO Manpower Trend (Planned vs Actual)
  - Skill Level Distribution (L0, L1, L2, L3)
  - Gender Headcount & Attendance Distribution
- **Attendance Records Table**:
  - 14-day shift A/B attendance matrix per employee
  - Real-time instant search by Name, Paycode, or Department
  - Pagination controls
  - Attendance spreadsheet upload simulation
- **Manpower Requirement Records Table**:
  - 12-month requirement quota tracking (PP, SP, FN01, FN02)
  - Approval status tags (*System Approved*, *Pending*, *Rejected*)
  - Interactive "Add New Requirement" modal with section, quota, and approver details
- **100% Mock-Driven**:
  - Completely detached from any backend or database.
  - All data is read from well-structured local JSON files in `src/data/`.
  - Simulates API responses with realistic network micro-delays for client demos.

---

## 📁 Project Structure

```text
unomindaPune/
├── index.html                   # HTML Entry point with Uno Minda branding
├── netlify.toml                 # Netlify deployment configuration
├── package.json                 # Project dependencies & build scripts
├── postcss.config.js            # PostCSS config for Tailwind
├── tailwind.config.js           # Tailwind CSS theme extension
├── vite.config.js               # Vite build configuration with '@' alias
├── public/
│   ├── _redirects               # SPA routing rewrite rule for Netlify
│   └── unominda_logo.png        # Official Uno Minda logo asset
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Client-side router configuration
    ├── index.css                # Global Tailwind CSS and styling
    ├── assets/images/           # Uno Minda logo and branding images
    ├── components/              # Shared layout and navigation
    │   ├── AuthLayout.jsx
    │   ├── Filters.jsx          # Plant / Dept / Line filter bar
    │   ├── KPICards.jsx         # Executive KPI summary cards
    │   ├── Navbar.jsx           # Topbar with Uno Minda user profile
    │   └── Sidebar.jsx          # Responsive collapsible sidebar with logo
    ├── dashboard/
    │   ├── components/          # Dashboard charts & tables
    │   │   ├── Absentism.jsx
    │   │   ├── AttendanceTable.jsx
    │   │   ├── Attrition.jsx
    │   │   ├── DailyManpower.jsx
    │   │   ├── DailySalary.jsx
    │   │   ├── DojoManpowerTrend.jsx
    │   │   ├── GenderAttendance.jsx
    │   │   ├── GenderDistribution.jsx
    │   │   ├── RequirementPopup.jsx
    │   │   ├── RequirementTable.jsx
    │   │   └── SkillLevelDistribution.jsx
    │   ├── data/
    │   │   └── DashboardMenu.jsx # Navigation routes configuration
    │   └── pages/               # Main routed views
    │       ├── Attendance.jsx   # /dashboard/attendance
    │       ├── Dashboard.jsx    # /dashboard (Main overview)
    │       └── Requirement.jsx  # /dashboard/requirement
    ├── data/                    # Local mock JSON data store
    │   ├── absenteeism.json
    │   ├── attendanceRecords.json
    │   ├── attrition.json
    │   ├── currentUser.json
    │   ├── dailyManpower.json
    │   ├── dailySalary.json
    │   ├── departments.json
    │   ├── dojoTrend.json
    │   ├── genderDistribution.json
    │   ├── kpiData.json
    │   ├── lines.json
    │   ├── machines.json
    │   ├── plants.json
    │   ├── requirementRecords.json
    │   ├── skillDistribution.json
    │   └── subDepartments.json
    ├── services/                # Mock API adapters & auth storage
    │   ├── AuthApi.js
    │   ├── authStorage.js
    │   └── mockApiService.js
    └── utils/
        └── chartConfig.js       # Shared Chart.js palette and utilities
```

---

## 🛠️ Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Netlify Deployment

The project is pre-configured and ready to deploy directly to Netlify:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA Redirects**: Included via `netlify.toml` and `public/_redirects` (`/*  /index.html  200`) so direct page refreshes on `/dashboard`, `/dashboard/attendance`, and `/dashboard/requirement` work seamlessly without 404 errors.
