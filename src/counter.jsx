import { useState } from "react"

export default function Counter() {

    const counterStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }




    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }


    return (
        <div style={counterStyle}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}