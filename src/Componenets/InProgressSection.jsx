import InProgress from './InProgress.jsx'
import { useBoard } from '../Contexts/BoardContext.jsx'
import TakeInProgressInput from './TakeInProgressInput.jsx'
import { useIsAddComponentClicked } from '../Contexts/isAddComponentClickedContext.jsx'

function InProgressSection() {

    const { isAddProgressClicked, setIsAddProgressClicked } = useIsAddComponentClicked();

    const { boards, activeBoardId } = useBoard();


    function takeProgressInput() {
        setIsAddProgressClicked(true);
    }



    return (
        <>
            <div className="inProgressSection">
                <h1>In Progress</h1>
                <button onClick={takeProgressInput}> Add New Progress </button>

                {boards.map((board) => {
                    if (board.id === activeBoardId) {

                        return (
                            <>
                                {board.inProgress.map((ProgressData) => (
                                    <div>
                                        <InProgress key={ProgressData.id} ProgressData={ProgressData} />
                                    </div>
                                ))}
                            </>
                        );
                    }
                })}
            </div>

            {
                (isAddProgressClicked && <span className="addForm">

                    <TakeInProgressInput id={activeBoardId} setFlag={setIsAddProgressClicked} />
                </span>
                )
            }
        </>
    )


}

export default InProgressSection