import { ReactNode } from "react";

const Rack = ({children}: {children?: ReactNode}) => {
    const style: React.CSSProperties = {
        borderColor: 'black', 
        borderWidth:'2px', 
        width: '1000px', 
        height: '600px', 
        margin:'5px', 
        padding: '5px',
        display: 'flex'
    }
 
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Rack;
