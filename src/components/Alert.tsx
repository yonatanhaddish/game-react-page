import { ReactNode } from "react";

interface alertProps {
    children: ReactNode;
    clicked: boolean;
}


const Alert = ({ children, clicked }: alertProps) => {

    // console.log(children);
    console.log("alertComponent: " + clicked);

    return (
        <>
            {clicked && (<div className="alert alert-success" role="alert">
                {children}
            </div>)}
            {/* {!clicked && (<div className="alert alert-danger" role="alert">
                {children}
            </div>)} */}
        </>
    )
}

export default Alert;