import ComponentSwitcher from './ComponentSwitcher.jsx';
import { useState } from 'react';

function Todo({ todoData }) {
    const [MoveTo, setMoveTo] = useState(false);


    return (
        <div className="Todo" style={{ backgroundColor: '#FFFFE4' }}>

            <button> {todoData.priority} </button>
            <h2>{todoData.title}</h2>
            <p>{todoData.description}</p>
            <p>{todoData.dueDate} , {todoData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}> Move To </button>
            {MoveTo && <ComponentSwitcher close={() => setMoveTo(false)} />}

        </div>

    )
}

export default Todo