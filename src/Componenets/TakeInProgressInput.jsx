import { useState } from 'react'
import { useDIRT } from '../Contexts/DIRTContext.jsx'

function TakeInProgressInput({ id, setFlag }) {

    const [ProgressTitle, setProgressTitle] = useState('');
    const [ProgressDescription, setProgressDescription] = useState('');
    const [ProgressDueDate, setProgressDueDate] = useState('');
    const [ProgressDueTime, setProgressDueTime] = useState('');
    const [ProgressPercentage, setProgressPercentage] = useState('');

    const { addInProgress } = useDIRT();

    const ProgressData = {
        title: ProgressTitle,
        description: ProgressDescription,
        dueDate: ProgressDueDate,
        dueTime: ProgressDueTime,
        percentage: ProgressPercentage
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (ProgressTitle && ProgressDescription && ProgressDueDate && ProgressDueTime && ProgressPercentage) {
            addInProgress(id, ProgressData);
            setFlag(false);
        } else {
            alert('Please fill all the fields');
            setFlag(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Progress Title" onChange={(e) => setProgressTitle(e.target.value)} />
            <input type="text" placeholder="Progress Description" onChange={(e) => setProgressDescription(e.target.value)} />
            <input type="date" placeholder="Due Date" onChange={(e) => setProgressDueDate(e.target.value)} />
            <input type="time" placeholder="Due Time" onChange={(e) => setProgressDueTime(e.target.value)} />
            <input type="number" placeholder="Progress Percentage" onChange={(e) => setProgressPercentage(e.target.value)} />


            <button type='button' onClick={() => setFlag(false)}>Cancel</button>
            <button type='submit' >Add Progress</button>
        </form>
    )

}

export default TakeInProgressInput
