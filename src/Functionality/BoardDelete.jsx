import { useBoard } from '../Contexts/BoardContext.jsx'

function BoardDelete({ id }) {

    const { deleteBoard } = useBoard();

    return (
        <button onClick={deleteBoard(id)}>Delete</button>

    )
}


export default BoardDelete