import React, {useEffect, useState} from 'react';
import * as styles from './Solution.module.css';

const Solution = ({figures}) => {
    const w = new Array(10).fill(null);
    const h = new Array(5).fill(null);

    const [bgColors, setBgColors] = useState({});

    useEffect(() => {
        if (Array.isArray(figures)) {
            const colors = {};
            figures.forEach(({point, figure}, i) => {
                const [x, y] = point;
                figure.points.forEach(([dx, dy]) => {
                    colors[`${x + dx}-${y + dy}`] = {backgroundColor: figure.color};
                })
            });
            setBgColors(colors);
        }
    }, [figures])

    return (
        <div>
            {
                h.map((hValue, hIndex) => {
                    return <div className={styles.row} key={hIndex}>
                        {
                            w.map((wValue, wIndex) => {
                                return <div className={styles.col} key={wIndex}
                                            style={bgColors[`${wIndex}-${hIndex}`] || {}}>
                                    {/*{wIndex}-{hIndex}*/}
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
    );
};

export default Solution;