import KanbanListItem from './KanbanListItem.jsx'
import { useBoard } from '../Contexts/BoardContext.jsx'
import AddBoard from '../Functionality/AddBoard.jsx'


function KanbanList() {

    const { boards } = useBoard();

    if (!boards || boards.length === 0) return null;


    return (
        <>
            <div>
                <ul>
                    {boards.map((item) => (<div> <KanbanListItem key={item.id} id={item.id} itemName={item.name} />  </div>))}
                </ul>
            </div>

        </>
    );
}

export default KanbanList;
