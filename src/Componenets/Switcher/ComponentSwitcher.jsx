import { useState } from 'react';
import { useIsAddComponentClicked } from '../../Contexts/isAddComponentClickedContext.jsx';
import { useDIRT } from '../../Contexts/DIRTContext.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';

function ComponentSwitcher({ close, id, CurrentType }) {
    const [buttonClickedType, setButtonClickedType] = useState("");
    const { deleteElement } = useDIRT();
    const { activeBoardId } = useBoard();


    const {
        setIsAddTodoClicked,
        setIsAddProgressClicked,
        setIsAddReviewClicked,
        setIsAddDoneClicked
    } = useIsAddComponentClicked();

    function handleSubmit(e) {
        e.preventDefault();


        const handlers = {
            Todo: setIsAddTodoClicked,
            Progress: setIsAddProgressClicked,
            Review: setIsAddReviewClicked,
            Done: setIsAddDoneClicked,
        };

        if (handlers[buttonClickedType]) {
            handlers[buttonClickedType](true);


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
                    <button type="submit" onClick={() => setButtonClickedType("Progress")}>In Progress</button>
                    <button type="submit" onClick={() => setButtonClickedType("Review")}>Review</button>
                    <button type="submit" onClick={() => setButtonClickedType("Done")}>Done</button>
                </form>

                <button className="close-btn" onClick={close}>Close</button>
            </div>
        </div>
    );
}

export default ComponentSwitcher;
