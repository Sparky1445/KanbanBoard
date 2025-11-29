
import { useBoard } from '../../Contexts/BoardContext.jsx'
import TakeReviewInput from './TakeReviewInput.jsx'
import Review from './Review.jsx'
import { useIsAddComponentClicked } from '../../Contexts/isAddComponentClickedContext.jsx'


function ReviewSection() {

    const { isAddReviewClicked, setIsAddReviewClicked } = useIsAddComponentClicked();
    const { boards, activeBoardId } = useBoard();



    function takeReviewInput() {
        setIsAddReviewClicked(true);
    }



    return (
        <>
            <div className="ReviewSection">
                <h1>Review</h1>
                <button onClick={takeReviewInput}> Add New Review </button>

                {boards.map((board) => {
                    if (board.id === activeBoardId) {

                        return (
                            <>
                                {board.review.map((ReviewData) => (
                                    <div>
                                        <Review id={ReviewData.id} key={ReviewData.id} ReviewData={ReviewData} />
                                    </div>
                                ))}
                            </>
                        );
                    }
                })}
            </div>

            {
                (isAddReviewClicked && <span className="addForm">

                    <TakeReviewInput id={activeBoardId} setFlag={setIsAddReviewClicked} />
                </span>
                )
            }
        </>

    )


}

export default ReviewSection