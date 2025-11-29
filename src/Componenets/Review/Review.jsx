import { useState } from 'react';
import ComponentSwitcher from '../Switcher/ComponentSwitcher.jsx';
import { useDIRT } from '../../Contexts/DIRTContext.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';

function Review({ ReviewData, id }) {
    const [MoveTo, setMoveTo] = useState(false);
    const { activeBoardId } = useBoard();
    const { deleteElement } = useDIRT();


    return (
        <div className="Review">


            <h2>{ReviewData.title}</h2>
            <p>{ReviewData.ToBeReviewed}</p>
            <p> {ReviewData.ReviewedTillNow} </p>
            <p>{ReviewData.ReviewedBy}</p>
            <p>{ReviewData.dueDate} , {ReviewData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            <button onClick={() => window.confirm("Are you sure you want to delete this task?") && deleteElement(activeBoardId, id, 'review')}>Delete</button>

            {MoveTo && <ComponentSwitcher CurrentType="review" id={id} close={() => setMoveTo(false)} />}
        </div>

    )
}

export default Review