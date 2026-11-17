import { useState } from "react";
import {
  X,
  ClipboardList,
  Building2,
  Bell,
  Plus,
  Save,
} from "lucide-react";
import departmentsData from "../../data/departments.json";
import subDepartmentsData from "../../data/subDepartments.json";
import linesData from "../../data/lines.json";

const defaultMonth = () => ({ pp: 0, sp: 0, fn01: 0, fn02: 0 });

const RequirementPopup = ({ open, onClose, onSave }) => {
  const [department, setDepartment] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [line, setLine] = useState("");
  const [shift, setShift] = useState("Shift A");
  const [sectionName, setSectionName] = useState("");
  const [ppVal, setPpVal] = useState("4");
  const [spVal, setSpVal] = useState("1");
  const [recipient, setRecipient] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSave = () => {
    const selectedDept = departmentsData.find((d) => d.id === department);
    const deptName = selectedDept ? selectedDept.name : "Operations";
    const selectedLine = linesData.find((l) => l.id === line);
    const lineDesc = selectedLine ? selectedLine.name : (sectionName || "Pune Assembly Cell");

    const newReq = {
      id: Date.now(),
      code: `PUN-NEW-${Math.floor(100 + Math.random() * 900)}`,
      sectionName: deptName,
      lineDescription: lineDesc,
      approval: "System Approved",
      jan: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      feb: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      mar: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      apr: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      may: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      jun: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      jul: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      aug: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      sep: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      oct: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      nov: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
      dec: { pp: Number(ppVal) || 4, sp: Number(spVal) || 1, fn01: 0, fn02: 0 },
    };

    if (onSave) {
      onSave(newReq);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center p-5">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl border border-[#e2edf2] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#e2edf2] shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#e0f4fc] border border-[#20a8df]/30 shadow-[0_0_12px_rgba(32,168,223,0.18)] text-[#20a8df] flex items-center justify-center shadow-xs">
              <ClipboardList size={20} className="text-[#20a8df]" />
            </div>

            <div>
              <h2 className="text-base font-bold text-[#0f172a] leading-tight">
                Add New Requirement
              </h2>
              <p className="text-xs text-[#64748b]">
                Create a new manpower requirement for Uno Minda Pune
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg border border-[#e2edf2] flex items-center justify-center text-[#64748b] hover:border-[#20a8df] hover:text-[#20a8df] transition"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div className="bg-[#e0f4fc] p-1.5 rounded-lg text-[#20a8df]">
                <Building2 size={15} />
              </div>

              <h3 className="font-semibold text-[#0f172a] uppercase text-xs tracking-wide">
                Section Details
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              <div>
                <label className="text-xs text-[#64748b]">Department</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="mt-1.5 w-full border border-[#e2edf2] rounded-xl h-9 px-2.5 text-xs text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                >
                  <option value="">Select Department</option>
                  {departmentsData.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-[#64748b]">Sub Department</label>
                <select
                  value={subDepartment}
                  onChange={(e) => setSubDepartment(e.target.value)}
                  className="mt-1.5 w-full border border-[#e2edf2] rounded-xl h-9 px-2.5 text-xs text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                >
                  <option value="">Select Sub Department</option>
                  {subDepartmentsData.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-[#64748b]">Line</label>
                <select
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  className="mt-1.5 w-full border border-[#e2edf2] rounded-xl h-9 px-2.5 text-xs text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                >
                  <option value="">Select Line</option>
                  {linesData.map((l) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-[#64748b]">Shift</label>
                <select
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                  className="mt-1.5 w-full border border-[#e2edf2] rounded-xl h-9 px-2.5 text-xs text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                >
                  <option value="Shift A">Shift A (06:00 - 14:30)</option>
                  <option value="Shift B">Shift B (14:30 - 23:00)</option>
                  <option value="General">General (09:00 - 17:30)</option>
                </select>
              </div>
            </div>

            <div className="mt-2.5">
              <label className="text-xs text-[#64748b]">Section / Workstation Name</label>
              <input
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                placeholder="e.g. Pune Assembly Station 3"
                className="mt-1.5 h-9 text-xs border border-[#e2edf2] rounded-xl px-2.5 w-full text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white placeholder:text-[#94a3b8]"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2.5">
              <div className="flex items-center gap-2">
                <div className="bg-[#e0f4fc] p-1.5 rounded-lg text-[#20a8df]">
                  <ClipboardList size={15} />
                </div>

                <h3 className="uppercase text-xs font-semibold text-[#0f172a] tracking-wide">
                  Requirement Quota
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#64748b]">Permanent Plant (PP)</label>
                <input
                  type="number"
                  value={ppVal}
                  onChange={(e) => setPpVal(e.target.value)}
                  className="mt-1.5 w-full h-9 text-xs border border-[#e2edf2] rounded-xl px-2.5 text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-xs text-[#64748b]">Subcontract / Temporary (SP)</label>
                <input
                  type="number"
                  value={spVal}
                  onChange={(e) => setSpVal(e.target.value)}
                  className="mt-1.5 w-full h-9 text-xs border border-[#e2edf2] rounded-xl px-2.5 text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div className="bg-[#e0f4fc] p-1.5 rounded-lg text-[#20a8df]">
                <Bell size={15} />
              </div>

              <h3 className="uppercase text-xs font-semibold text-[#0f172a] tracking-wide">
                Notification Details
              </h3>
            </div>

            <div className="grid grid-cols-12 gap-2.5">
              <div className="col-span-6">
                <label className="text-xs text-[#64748b]">Approver Name</label>
                <input
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="mt-1.5 w-full h-9 text-xs border border-[#e2edf2] rounded-xl px-2.5 text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white placeholder:text-[#94a3b8]"
                  placeholder="e.g. Pune Operations Lead"
                />
              </div>

              <div className="col-span-6">
                <label className="text-xs text-[#64748b]">Approver Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full h-9 text-xs border border-[#e2edf2] rounded-xl px-2.5 text-[#0f172a] focus:ring-2 focus:ring-[#20a8df]/20 focus:border-[#20a8df] outline-none bg-white placeholder:text-[#94a3b8]"
                  placeholder="approver@unominda.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-5 py-3 border-t border-[#e2edf2] bg-[#f8fafc] shrink-0">
          <button
            onClick={onClose}
            className="px-4 h-9 rounded-xl text-xs font-semibold border border-[#e2edf2] bg-white text-[#64748b] hover:border-[#20a8df] hover:text-[#20a8df] transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 h-9 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#0b7aa8] via-[#20a8df] to-[#38bdf8] hover:from-[#08638a] hover:to-[#1ca0d6] text-white shadow-sm shadow-[#20a8df]/35 transition flex items-center gap-1.5"
          >
            <Save size={14} />
            Save Requirement
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequirementPopup;
