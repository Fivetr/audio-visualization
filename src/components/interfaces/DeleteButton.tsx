// ALL: Desong Li
import { FaDeleteLeft } from "react-icons/fa6";
import { modules } from "../../../types/index";

type DeleteButtonProps = {
  setModules: React.Dispatch<React.SetStateAction<modules>>;
  module: string;
};

function DeleteButton({ setModules, module }: DeleteButtonProps) {
  const handleClick = () => {
    setModules((prev) => ({
      ...prev,
      [module]: { ...prev[module], isOpen: false },
    }));
  };
  return (
    <div
      className="absolute top-0 right-1 text-2xl rounded-full hover:animate-pulse text-red-400 cursor-pointer"
      onClick={handleClick}
    >
      <FaDeleteLeft />
    </div>
  );
}

export default DeleteButton;
