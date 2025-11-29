import { useBoard } from '../../Contexts/BoardContext.jsx'

function KanbanListItem({ itemName, id }) {
    const { deleteBoard, selectBoard } = useBoard();

    function handleDeleteClick() {
        deleteBoard(id);
    }


    function handleBoardSelect() {
        if (itemName !== 'New Board') {
            selectBoard(id);
        }
    }

    return (
        <li>

            {(itemName !== 'New Board') ?
                <button
                    key={id}
                    id={id}
                    className='BoardButton'
                    onClick={handleBoardSelect}
                >
                    {itemName}
                </button>
                :
                <button>New Board</button>
            }

            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
}

export default KanbanListItem;