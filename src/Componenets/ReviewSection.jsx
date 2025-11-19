
import { useBoard } from '../Contexts/BoardContext.jsx'
import { useState } from 'react'
import TakeReviewInput from './TakeReviewInput.jsx'
import Review from './Review.jsx'


function ReviewSection() {


    const { boards, activeBoardId } = useBoard();

    const [isAddReviewClicked, setIsAddReviewClicked] = useState(false);

    function takeReviewInput() {
        setIsAddReviewClicked(true);
    }



    return (
        <div className="ReviewSection">
            <h1>Review</h1>
            <button onClick={takeReviewInput}> Add New Review </button>

            {boards.map((board) => {
                if (board.id === activeBoardId) {

                    return (
                        <>
                            {board.review.map((ReviewData) => (
                                <div>
                                    <Review key={ReviewData.id} ReviewData={ReviewData} />
                                </div>
                            ))}
                        </>
                    );
                }
            })}

            {isAddReviewClicked && <TakeReviewInput id={activeBoardId} setFlag={setIsAddReviewClicked} />}

        </div>
    )


}

export default ReviewSection