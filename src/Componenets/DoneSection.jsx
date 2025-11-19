import Done from './Done.jsx';
import { useBoard } from '../Contexts/BoardContext.jsx';
import TakeDoneInput from './TakeDoneInput.jsx';
import { useState } from 'react';

function DoneSection() {

    const { boards, activeBoardId } = useBoard();
    const [isAddDoneClicked, setIsAddDoneClicked] = useState(false);

    function takeDoneInput() {
        setIsAddDoneClicked(true);
    }

    return (
        <div className="doneSection">
            <h1>Done</h1>
            <button onClick={takeDoneInput}> Add Done Task </button>

            {boards.map((board) => {
                if (board.id === activeBoardId) {
                    return (
                        <>
                            {board.done.map((doneTask) => (
                                <div key={doneTask.id}>
                                    <Done DoneData={doneTask} />
                                </div>
                            ))}
                        </>
                    );
                }
            })}

            {isAddDoneClicked && (
                <TakeDoneInput id={activeBoardId} setFlag={setIsAddDoneClicked} />
            )}
        </div>
    );
}

export default DoneSection;
