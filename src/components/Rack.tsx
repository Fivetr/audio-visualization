import { ReactNode } from "react";

const Rack = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="border-gray-100 relative overflow-hidden border-b w-full h-[600px] flex justify-center bg-gradient-to-tl from-[#5a0260] via-[#948f97] to-[#5a0260] ">
      <div className="w-[1920px] flex justify-evenly items-center p-24">
        {children}
      </div>
    </div>
  );
};

export default Rack;
