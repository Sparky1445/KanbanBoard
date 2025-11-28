import ComponentSwitcher from './ComponentSwitcher.jsx';
import { useState } from 'react';

function Done({ DoneData }) {
    const [MoveTo, setMoveTo] = useState(false);

    return (
        <div className="Done" style={{ backgroundColor: '#55efc4' }}>
            <h2>{DoneData.title}</h2>
            <p>Completed By: {DoneData.doneBy}</p>
            <p>Completed At: {DoneData.timeOfCompletion}</p>


            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            {MoveTo && <ComponentSwitcher setMoveTo={setMoveTo} />}
        </div>
    );
}

export default Done;
