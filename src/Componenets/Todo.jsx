function Todo({ todoData }) {
    return (
        <div className="Todo">

            <button> {todoData.priority} </button>
            <h2>{todoData.title}</h2>
            <p>{todoData.description}</p>
            <p>{todoData.dueDate} , {todoData.dueTime}</p>
        </div>

    )
}

export default Todo