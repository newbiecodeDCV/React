import { useState } from 'react';
function ListGroup({ children}) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <form><input type='text' onChange={(e) => console.log(e.target.value)}/></form>
        // <>
        //     <h1>{heading}</h1>
        //     {items.length === 0 && <h1>Not Found</h1>}
        //     <ul className="list-group">
        //         {items.map((player, index) => (
        //             <li
        //                 onClick={() => setSelectedIndex(index)}
        //                 className={
        //                     selectedIndex === index
        //                         ? 'list-group-item active'
        //                         : 'list-group-item'
        //                 }
        //                 key={player}
        //             >
        //                 {player}
        //             </li>
        //         ))}
        //     </ul>
        // </>
    );
}
export default ListGroup;
