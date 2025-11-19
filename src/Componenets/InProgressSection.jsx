import InProgress from './InProgress.jsx'
import { useBoard } from '../Contexts/BoardContext.jsx'
import TakeInProgressInput from './TakeInProgressInput.jsx'
import { useState } from 'react'

function InProgressSection() {


    const { boards, activeBoardId } = useBoard();

    const [isAddProgressClicked, setIsAddProgressClicked] = useState(false);

    function takeProgressInput() {
        setIsAddProgressClicked(true);
    }



    return (
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

            {isAddProgressClicked && <TakeInProgressInput id={activeBoardId} setFlag={setIsAddProgressClicked} />}

        </div>
    )


}

export default InProgressSection