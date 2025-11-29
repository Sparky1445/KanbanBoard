import Done from './Done.jsx';
import { useBoard } from '../../Contexts/BoardContext.jsx';
import TakeDoneInput from './TakeDoneInput.jsx';
import { useIsAddComponentClicked } from '../../Contexts/isAddComponentClickedContext.jsx';

function DoneSection() {

    const { boards, activeBoardId } = useBoard();
    const { isAddDoneClicked, setIsAddDoneClicked } = useIsAddComponentClicked();

    function takeDoneInput() {
        setIsAddDoneClicked(true);
    }

    return (
        <>
            <div className="doneSection">
                <h1>Done</h1>
                <button onClick={takeDoneInput}> Add Done Task </button>

                {boards.map((board) => {
                    if (board.id === activeBoardId) {
                        return (
                            <>
                                {board.done.map((doneTask) => (
                                    <div key={doneTask.id}>
                                        <Done key={doneTask.id} id={doneTask.id} DoneData={doneTask} />
                                    </div>
                                ))}
                            </>
                        );
                    }
                })}

            </div>

            {
                (isAddDoneClicked && <span className="addForm">

                    <TakeDoneInput id={activeBoardId} setFlag={setIsAddDoneClicked} />
                </span>
                )
            }
        </>
    );
}

export default DoneSection;
