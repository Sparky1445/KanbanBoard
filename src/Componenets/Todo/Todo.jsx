import ComponentSwitcher from '../Switcher/ComponentSwitcher.jsx';
import { useState } from 'react';
import { useDIRT } from '../../Contexts/DIRTContext.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';


function Todo({ todoData, id }) {
    const [MoveTo, setMoveTo] = useState(false);
    const { activeBoardId } = useBoard();
    const { deleteElement } = useDIRT();

    return (
        <div className="Todo" style={{ backgroundColor: '#FFFFE4' }}>

            <button> {todoData.priority} </button>
            <h2>{todoData.title}</h2>
            <p>{todoData.description}</p>
            <p>{todoData.dueDate} , {todoData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}> Move To </button>
            <button onClick={() => window.confirm("Are you sure you want to delete this task?") && deleteElement(activeBoardId, id, 'todos')}>Delete</button>

            {MoveTo && <ComponentSwitcher CurrentType="todos" id={id} close={() => setMoveTo(false)} />}

        </div>

    )
}

export default Todo