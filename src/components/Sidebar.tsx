import { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

function Sidebar() {
  const [Open, setOpen] = useState(false);
  const modules: string[] = [
    "Triggers",
    "OCS",
    "Amplitude envelope",
    "Lowpass Filter",
    "AMP",
  ];

  return (
    <div
      className={`absolute top-0 py-1.5 px-1.5 z-10 overflow-auto transition-all duration-700 ${
        Open ? "left-0" : "-left-[13rem]"
      }`}
    >
      <div className="flex gap-2 items-start">
        <div className="border border-purple-500  rounded-lg w-[200px]">
          {modules.map((module, idx) => {
            return (
              <div
                key={idx}
                className={`flex w-full justify-between border px-3 py-5 text-start text-sm font-bold hover:bg-gray-300 cursor-pointer bg-[#f1eef1]
                  ${
                    idx === 0
                      ? "rounded-t-lg"
                      : idx === modules.length - 1
                      ? "rounded-b-lg"
                      : ""
                  } 
                  ${idx !== modules.length - 1 ? "border-b-gray-400 " : ""} `}
              >
                {module}
              </div>
            );
          })}
        </div>
        <button
          className="text-4xl animate-bounce-left-right"
          onClick={() => setOpen(!Open)}
        >
          {Open ? <AiFillCaretLeft /> : <AiFillCaretRight />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
