import { useState } from "react";

function Message() {

    const [isCool, setIsCool] = useState(false);

    const nameOne: string = "Cool";
    const nameTwo: string = "NOT Cool";

    function testFunction() {
        setIsCool(!isCool)
    }

    return (
        <>
            <h1>Component Message</h1>
            <h1>Is React Cool?</h1>
            <div>
                <button className="btn btn-success" onClick={testFunction}>Toggle Button</button>
            </div>
            {isCool ? (<h1 style={{ color: 'green', }}
            >Yes, React is {nameOne}</h1>) : (<h1 style={{ color: 'red' }}
            >No, React is {nameTwo}</h1>)}

        </>
    )
};
export default Message;