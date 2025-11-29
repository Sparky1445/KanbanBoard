import Todo from './Todo.jsx'
import { useBoard } from '../../Contexts/BoardContext.jsx'

import TakeTodoInput from './TakeTodoInput.jsx'
import { useIsAddComponentClicked } from '../../Contexts/isAddComponentClickedContext.jsx'
function TodoSection() {

    const { boards, activeBoardId } = useBoard();


    const { isAddTodoClicked, setIsAddTodoClicked } = useIsAddComponentClicked();

    function takeTodoInput() {
        setIsAddTodoClicked(true);
    }


    return (
        <div className="TodoSection" key={activeBoardId}>
            <h1>Todos</h1>
            <button onClick={takeTodoInput}> Add Todo</button>


            {boards.map((board) => {
                if (board.id === activeBoardId) {

                    return (
                        <>
                            {board.todos.map((todo) => (
                                <div>
                                    <Todo id={todo.id} key={todo.id} todoData={todo} />
                                </div>
                            ))}
                        </>
                    );
                }
            })}

            {
                (isAddTodoClicked && <span className="addForm">

                    <TakeTodoInput id={activeBoardId} setFlag={setIsAddTodoClicked} />
                </span>
                )
            }


        </div>
    )






}

export default TodoSection