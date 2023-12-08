// ALL: Michael Zayne Lumpkin
interface ButtonProps {
  label: string;
  style?: string;
  onClick: () => void;
  offClick?: () => void;
}

const Button = ({ label, onClick, offClick, style }: ButtonProps) => (
  <button
    className={`border-black text-center ${style}`}
    onMouseDown={onClick}
    onMouseUp={offClick}
    onMouseLeave={offClick}
  >
    {label}
  </button>
);

export default Button;
