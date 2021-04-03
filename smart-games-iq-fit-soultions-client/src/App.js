import React from "react";
import * as styles from './App.module.css';
import Solution from "./Solution";

const data = require('./data.json');

function App() {
    return <>
        <h1>Smart Games IQ Fit (first 1000 solutions)</h1>
        {data.map((figures, i) => (
            <div key={i} className={styles.solutionBlock}>
                <h4>Solution # {i + 1}</h4>
                <Solution figures={figures}/>
            </div>
        ))}
    </>;
}

export default App;
