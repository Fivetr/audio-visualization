interface ButtonProps{
    label: string;
    onClick: () => void;
    offClick?: () => void;
}

const Button = ({label, onClick, offClick}: ButtonProps) => (
    <button onMouseDown={onClick} onMouseUp={offClick} onMouseLeave={offClick} style={{margin: '5px', borderColor: 'black', borderWidth: '2px'}}>
        {label}
    </button>
)

export default Button;