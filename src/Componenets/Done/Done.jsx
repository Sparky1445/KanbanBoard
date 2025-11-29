import ComponentSwitcher from '../Switcher/ComponentSwitcher.jsx';
import { useState } from 'react';
import { useDIRT } from '../../Contexts/DIRTContext.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';

function Done({ DoneData, id }) {
    const [MoveTo, setMoveTo] = useState(false);
    const { activeBoardId } = useBoard();
    const { deleteElement } = useDIRT();

    return (
        <div className="Done" style={{ backgroundColor: '#55efc4' }}>
            <h2>{DoneData.title}</h2>
            <p>Completed By: {DoneData.doneBy}</p>
            <p>Completed At: {DoneData.timeOfCompletion}</p>


            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            <button onClick={() => window.confirm("Are you sure you want to delete this task?") && deleteElement(activeBoardId, id, 'done')}>Delete</button>
            {MoveTo && <ComponentSwitcher CurrentType="done" id={id} close={() => setMoveTo(false)} />}
        </div>
    );
}

export default Done;
