import { useState } from 'react'
import { useDIRT } from '../Contexts/DIRTContext.jsx'

function TakeReviewInput({ id, setFlag }) {

    const [Title, setTitle] = useState('');
    const [ToBeReviewed, setToBeReviewed] = useState('');
    const [DueDate, setDueDate] = useState('');
    const [DueTime, setDueTime] = useState('');
    const [ReviewedTillNow, setReviewedTillNow] = useState('');
    const [ReviewedBy, setReviewedBy] = useState('');

    const { addReview } = useDIRT();

    const ReviewData = {
        title: Title,
        ToBeReviewed: ToBeReviewed,
        dueDate: DueDate,
        dueTime: DueTime,
        ReviewedTillNow: ReviewedTillNow,
        ReviewedBy: ReviewedBy
    };

    function handleSubmit(e) {
        e.preventDefault();
        addReview(id, ReviewData);
        setFlag(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Review Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="To Be Reviewed.." onChange={(e) => setToBeReviewed(e.target.value)} />
            <input type="text" placeholder="Reviewed Till Now.." onChange={(e) => setReviewedTillNow(e.target.value)} />
            <input type="text" placeholder="Reviewed By.." onChange={(e) => setReviewedBy(e.target.value)} />
            <input type="date" placeholder="Due Date" onChange={(e) => setDueDate(e.target.value)} />
            <input type="time" placeholder="Due Time" onChange={(e) => setDueTime(e.target.value)} />



            <button type='button' onClick={() => setFlag(false)}>Cancel</button>
            <button type='submit' >Add Review</button>
        </form>
    )

}

export default TakeReviewInput
