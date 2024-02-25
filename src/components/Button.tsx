import { ReactNode } from "react"

interface buttonProp {
    children: ReactNode;
    handleClickButton: () => void;
}
const Button = ({ children, handleClickButton }: buttonProp) => {
    return (
        <button type="button" className="btn btn-success" onClick={handleClickButton}>{children}</button>
    )
}

export default Button
