import { useState } from 'react';
import { useIsAddComponentClicked } from '../Contexts/isAddComponentClickedContext';

function ComponentSwitcher({ close }) {
    const [buttonClickedType, setButtonClickedType] = useState("");

    const {
        setIsAddTodoClicked,
        setIsAddProgressClicked,
        setIsAddReviewClicked,
        setIsAddDoneClicked
    } = useIsAddComponentClicked();

    function handleSubmit(e) {
        e.preventDefault();

        if (buttonClickedType === "Todo") {
            setIsAddTodoClicked(true);
        } else if (buttonClickedType === "InProgress") {
            setIsAddProgressClicked(true);
        } else if (buttonClickedType === "Review") {
            setIsAddReviewClicked(true);
        } else if (buttonClickedType === "Done") {
            setIsAddDoneClicked(true);
        }
        setButtonClickedType('');
        close();
    }

    return (
        <div className="lightbox-overlay" onClick={close}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <h2>Move To</h2>
                <form onSubmit={handleSubmit}>
                    <button type="submit" onClick={() => setButtonClickedType("Todo")}>Todo</button>
                    <button type="submit" onClick={() => setButtonClickedType("InProgress")}>In Progress</button>
                    <button type="submit" onClick={() => setButtonClickedType("Review")}>Review</button>
                    <button type="submit" onClick={() => setButtonClickedType("Done")}>Done</button>
                </form>

                <button className="close-btn" onClick={close}>Close</button>
            </div>
        </div>
    );
}

export default ComponentSwitcher;
