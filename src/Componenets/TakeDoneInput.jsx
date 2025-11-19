import { useState } from 'react';
import { useDIRT } from '../Contexts/DIRTContext.jsx';

function TakeDoneInput({ id, setFlag }) {

    const [DoneTitle, setDoneTitle] = useState('');
    const [DoneBy, setDoneBy] = useState('');
    const [TimeOfCompletion, setTimeOfCompletion] = useState('');

    const { addDone } = useDIRT();   // assuming same as addInProgress

    const DoneData = {
        title: DoneTitle,
        doneBy: DoneBy,
        timeOfCompletion: TimeOfCompletion
    };

    function handleSubmit(e) {
        e.preventDefault();
        addDone(id, DoneData);
        setFlag(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                onChange={(e) => setDoneTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Done By"
                onChange={(e) => setDoneBy(e.target.value)}
            />

            <input
                type="datetime-local"
                placeholder="Time of Completion"
                onChange={(e) => setTimeOfCompletion(e.target.value)}
            />

            <button type="button" onClick={() => setFlag(false)}>Cancel</button>
            <button type="submit">Add Done</button>
        </form>
    );
}

export default TakeDoneInput;
