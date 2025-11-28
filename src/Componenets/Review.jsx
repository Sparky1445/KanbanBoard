import { useState } from 'react';
import ComponentSwitcher from './ComponentSwitcher.jsx';
function Review({ ReviewData }) {
    const [MoveTo, setMoveTo] = useState(false);

    return (
        <div className="Review">


            <h2>{ReviewData.title}</h2>
            <p>{ReviewData.ToBeReviewed}</p>
            <p> {ReviewData.ReviewedTillNow} </p>
            <p>{ReviewData.ReviewedBy}</p>
            <p>{ReviewData.dueDate} , {ReviewData.dueTime}</p>

            <button onClick={() => setMoveTo(!MoveTo)}>Move To</button>
            {MoveTo && <ComponentSwitcher setMoveTo={setMoveTo} />}
        </div>

    )
}

export default Review