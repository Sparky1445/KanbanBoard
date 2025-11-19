import Todo from './Todo.jsx'
import { useBoard } from '../Contexts/BoardContext.jsx'
import { useState } from 'react'
import TakeTodoInput from './TakeTodoInput.jsx'

function TodoSection() {

    const { boards, activeBoardId } = useBoard();


    const [isAddTodoClicked, setIsAddTodoClicked] = useState(false);

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
                                    <Todo key={todo.id} todoData={todo} />
                                </div>
                            ))}
                        </>
                    );
                }
            })}

            {isAddTodoClicked && <TakeTodoInput id={activeBoardId} setFlag={setIsAddTodoClicked} />}



        </div>
    )






}

export default TodoSection