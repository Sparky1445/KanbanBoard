import { useBoard } from '../Contexts/BoardContext.jsx'


function KanbanListItem({ itemName, id }) {
    const { deleteBoard } = useBoard();

    function handleClick() {
        deleteBoard(id);
    }

    return (
        <li>
            {(itemName != 'New Board') ? itemName : <p>New Board</p>}
            <button onClick={handleClick}>Delete</button>
        </li>
    );
}

export default KanbanListItem;