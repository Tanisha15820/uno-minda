import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Search } from "lucide-react";
import RequirementPopup from "./RequirementPopup";
import mockRequirements from "../../data/requirementRecords.json";

// All 12 Months
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Approval Styles
const approvalStyles = {
  "System Approved": {
    badge: "bg-sky-100 text-[#0b7aa8] ring-sky-500/25 shadow-xs",
    dot: "bg-[#20a8df] shadow-[0_0_6px_#20a8df]",
  },
  Pending: {
    badge: "bg-amber-100 text-amber-700 ring-amber-600/20",
    dot: "bg-amber-500",
  },
  Rejected: {
    badge: "bg-red-100 text-red-700 ring-red-600/20",
    dot: "bg-red-500",
  },
};

const RequirementTable = () => {
  const [requirementData, setRequirementData] = useState(mockRequirements);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  // Change Page
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  // Change Rows Per Page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Search
  const filteredData = requirementData.filter(
    (row) =>
      row.code.toLowerCase().includes(search.toLowerCase()) ||
      row.sectionName.toLowerCase().includes(search.toLowerCase()) ||
      row.lineDescription.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination
  const displayedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));
  const from = filteredData.length === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(filteredData.length, (page + 1) * rowsPerPage);

  const handleAddNew = (newReq) => {
    setRequirementData([newReq, ...requirementData]);
  };

  return (
    <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-[#e2edf2] bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(15,23,42,0.03)]">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#e2edf2] px-5 py-4 lg:flex-row lg:items-center">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f4fc] border border-[#20a8df]/30 text-[#0b7aa8] shadow-[0_0_12px_rgba(32,168,223,0.18)]">
            <AssignmentOutlinedIcon sx={{ color: "#20a8df", fontSize: 20 }} />
          </div>

          <div>
            <h2 className="text-base font-bold leading-tight text-[#0f172a]">
              Requirement Records
            </h2>
            <p className="text-xs text-[#64748b]">
              Uno Minda Pune plant manpower requirements &amp; approvals
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search code, section, line..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="pl-8 pr-3 py-2 text-xs rounded-xl border border-[#e2edf2] bg-white text-[#0f172a] placeholder:text-gray-400 focus:outline-none focus:border-[#20a8df] focus:ring-1 focus:ring-[#20a8df]/30 w-64 shadow-xs"
            />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0b7aa8] via-[#20a8df] to-[#38bdf8] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#20a8df]/35 transition-all duration-200 hover:from-[#08638a] hover:to-[#1ca0d6] active:scale-[0.99]"
          >
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 16 }} />
            Add Requirement
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1900px] border-collapse">
          <thead>
            <tr className="bg-gray-100/80">
              <th
                rowSpan={2}
                className="w-14 border-b border-r border-gray-200 px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600"
              >
                Action
              </th>
              <th
                rowSpan={2}
                className="border-b border-r border-gray-200 px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600"
              >
                Code
              </th>
              <th
                rowSpan={2}
                className="border-b border-r border-gray-200 px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600"
              >
                Section Name
              </th>
              <th
                rowSpan={2}
                className="border-b border-r border-gray-200 px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600"
              >
                Line Description
              </th>
              <th
                rowSpan={2}
                className="border-b border-r border-gray-200 px-3 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-gray-600"
              >
                Approval Status
              </th>

              {months.map((m) => (
                <th
                  key={m}
                  colSpan={4}
                  className="border-b border-r border-gray-200 px-2 py-1.5 text-center text-[10px] font-bold text-gray-700 bg-gray-200/50"
                >
                  {m}
                </th>
              ))}
            </tr>

            <tr className="bg-gray-50/80">
              {months.map((m) => (
                <th key={`${m}-sub`} colSpan={4} className="p-0 border-r border-gray-200">
                  <div className="grid grid-cols-4 text-center text-[9px] font-semibold text-gray-500">
                    <span className="py-1 border-r border-gray-200">PP</span>
                    <span className="py-1 border-r border-gray-200">SP</span>
                    <span className="py-1 border-r border-gray-200">FN01</span>
                    <span className="py-1">FN02</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {displayedData.length === 0 ? (
              <tr>
                <td
                  colSpan={5 + months.length * 4}
                  className="py-12 text-center text-xs text-gray-500"
                >
                  No requirements match the search filter.
                </td>
              </tr>
            ) : (
              displayedData.map((row) => {
                const style = approvalStyles[row.approval] || approvalStyles.Pending;

                return (
                  <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                    {/* Action */}
                    <td className="border-r border-gray-200 px-3 py-2.5 text-center">
                      <button
                        type="button"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#e2edf2] text-gray-500 transition-colors hover:border-[#20a8df] hover:text-[#20a8df]"
                        title="Edit Requirement"
                      >
                        <EditOutlinedIcon sx={{ fontSize: 14 }} />
                      </button>
                    </td>

                    {/* Code */}
                    <td className="border-r border-gray-200 px-3 py-2.5 text-center font-mono text-xs font-semibold text-gray-800">
                      {row.code}
                    </td>

                    {/* Section Name */}
                    <td className="border-r border-gray-200 px-3 py-2.5 text-center text-xs font-medium text-gray-800">
                      {row.sectionName}
                    </td>

                    {/* Line Description */}
                    <td className="border-r border-gray-200 px-3 py-2.5 text-center text-xs text-gray-600">
                      {row.lineDescription}
                    </td>

                    {/* Approval Status */}
                    <td className="border-r border-gray-200 px-3 py-2.5 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${style.badge}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                        {row.approval}
                      </span>
                    </td>

                    {/* Months Data */}
                    {months.map((m) => {
                      const key = m.toLowerCase();
                      const d = row[key] || { pp: 0, sp: 0, fn01: 0, fn02: 0 };

                      return (
                        <td key={m} colSpan={4} className="p-0 border-r border-gray-200">
                          <div className="grid grid-cols-4 text-center text-xs text-gray-700">
                            <span className="py-2.5 border-r border-gray-100">{d.pp}</span>
                            <span className="py-2.5 border-r border-gray-100">{d.sp}</span>
                            <span className="py-2.5 border-r border-gray-100">{d.fn01}</span>
                            <span className="py-2.5">{d.fn02}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col items-center justify-between gap-3 border-t border-[#e2edf2] px-5 py-3 text-xs text-gray-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="rounded-lg border border-[#e2edf2] bg-white px-2 py-1 text-xs text-gray-700 focus:outline-none focus:border-[#20a8df] focus:ring-1 focus:ring-[#20a8df]/30"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span className="ml-2">
            Showing {from} - {to} of {filteredData.length} entries
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>
            Page {page + 1} of {totalPages}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleChangePage(null, page - 1)}
              disabled={page === 0}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e2edf2] text-gray-600 disabled:opacity-40 disabled:hover:border-[#e2edf2]"
            >
              <KeyboardArrowLeftIcon sx={{ fontSize: 16 }} />
            </button>
            <button
              onClick={() => handleChangePage(null, page + 1)}
              disabled={page >= totalPages - 1}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e2edf2] text-gray-600 disabled:opacity-40 disabled:hover:border-[#e2edf2]"
            >
              <KeyboardArrowRightIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        </div>
      </div>

      <RequirementPopup
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleAddNew}
      />
    </div>
  );
};

export default RequirementTable;
