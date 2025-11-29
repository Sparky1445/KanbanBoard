import { useState } from 'react';
import ComponentSwitcher from '../Switcher/ComponentSwitcher.jsx';
import { useDIRT } from '../../Contexts/DIRTContext.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';


function InProgress({ ProgressData, id }) {

    const [MoveTo, setMoveTo] = useState(false);
    const { activeBoardId } = useBoard();
    const { deleteElement } = useDIRT();

    return (
        <div className="InProgress" style={{ backgroundColor: '#3b86d1' }}>


            <button>{ProgressData.percentage} %</button>
            <h2>{ProgressData.title}</h2>
            <p>{ProgressData.description}</p>
            <p>{ProgressData.dueDate} , {ProgressData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            <button onClick={() => window.confirm("Are you sure you want to delete this task?") && deleteElement(activeBoardId, id, 'inProgress')}>Delete</button>
            {MoveTo && <ComponentSwitcher CurrentType="inProgress" id={id} close={() => setMoveTo(false)} />}
        </div>

    )
}

export default InProgress