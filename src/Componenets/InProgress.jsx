import { useState } from 'react';
import ComponentSwitcher from './ComponentSwitcher.jsx';

function InProgress({ ProgressData }) {

    const [MoveTo, setMoveTo] = useState(false);
    return (
        <div className="InProgress" style={{ backgroundColor: '#3b86d1' }}>


            <button>{ProgressData.percentage} %</button>
            <h2>{ProgressData.title}</h2>
            <p>{ProgressData.description}</p>
            <p>{ProgressData.dueDate} , {ProgressData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            {MoveTo && <ComponentSwitcher setMoveTo={setMoveTo} />}
        </div>

    )
}

export default InProgress