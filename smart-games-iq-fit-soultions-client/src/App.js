import Solution from "./Solution";
import React from "react";
const data = require('./data.json');

function App() {
    return <>
        {data.map((figures, i) => (
            <div key={i}>
                <h4>Solution # {i + 1}</h4>
                <Solution figures={figures}/>
            </div>
        ))}
    </>;
}

export default App;
