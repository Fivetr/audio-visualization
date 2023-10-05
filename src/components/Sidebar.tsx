import { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { modules } from "../../types/index";
import { moduleLists } from "../components/Synth";

type SidebarProps = {
  Modules: modules;
  setModules: React.Dispatch<React.SetStateAction<modules>>;
};

function Sidebar({ Modules, setModules }: SidebarProps) {
  const [Open, setOpen] = useState(false);

  return (
    <aside
      className={`absolute top-0 py-1.5 px-1.5 z-10 overflow-auto transition-all duration-700 ${
        Open ? "left-0" : "-left-[13rem]"
      }`}
    >
      <div className="flex gap-2 items-start">
        <div className="border border-purple-500  rounded-lg w-[200px]">
          {moduleLists.map((module, idx) => {
            return (
              <div
                key={idx}
                className={`flex w-full justify-between border-b px-3 py-5 text-start text-sm font-bold hover:bg-[#9624a5] cursor-pointer 
                  ${
                    idx === 0
                      ? "rounded-t-lg"
                      : idx === moduleLists.length - 1
                      ? "rounded-b-lg"
                      : ""
                  } 
                  ${idx !== moduleLists.length - 1 ? "border-b-gray-400 " : ""} 
                  ${
                    Modules[module].isOpen === true
                      ? "bg-[#de43f3]"
                      : "bg-[#f1eef1]"
                  }`}
                onClick={() =>
                  setModules({
                    ...Modules,
                    [module]: {
                      ...Modules[module],
                      isOpen: !Modules[module].isOpen,
                    },
                  })
                }
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
    </aside>
  );
}

export default Sidebar;
