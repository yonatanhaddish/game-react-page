import { useState } from "react";

interface ListGroupProp {
    items: string[];
    heading: string;
    selectedItem: (item: string) => void;
}

function ListGroup({ items, heading, selectedItem }: ListGroupProp) {

    const [nameSingleList, setNameSignleList] = useState("");

    function selectItem(item: any) {
        let nameOne = item.target.innerText;
        setNameSignleList(nameOne);
    }

    function NoListMessage() {
        return (
            <>
                <h1>No List Found!</h1>
            </>
        )
    }
    function ListFoundAndListThem() {
        return (
            <>
                <ul className="list-group">
                    {items.map((item, index) => <li onClick={() => { selectItem; selectedItem(item) }} className="list-group-item" key={index}>{item}</li>)}
                </ul>
            </>
        )
    }
    return (
        <>
            <hr />
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.length === 0 && (<NoListMessage />)}
                {items.length > 0 && (<ListFoundAndListThem />)}
            </ul>
            <hr />
            {!nameSingleList && (<div style={{ backgroundColor: 'green', border: 'solid 5px', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>No Item Clicked</h1>
            </div>)}
            {nameSingleList && (<div style={{ backgroundColor: 'green', border: 'solid 5px', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>{nameSingleList}</h1>
            </div>)}

        </>

    );
}
export default ListGroup;