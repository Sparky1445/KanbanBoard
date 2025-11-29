import { useState } from 'react'
import { useDIRT } from '../../Contexts/DIRTContext.jsx'

function TakeTodoInput({ id, setFlag }) {


    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [todoDueDate, setTodoDueDate] = useState('');
    const [todoDueTime, setTodoDueTime] = useState('');
    const [todoPriority, setTodoPriority] = useState('');

    const { addTodo, ElementMovedFlag, setElementMovedFlag } = useDIRT();

    const todoData = {
        title: todoTitle,
        description: todoDescription,
        dueDate: todoDueDate,
        dueTime: todoDueTime,
        priority: todoPriority
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (todoTitle && todoDescription && todoDueDate && todoDueTime && todoPriority) {
            addTodo(id, todoData);
            setFlag(false);
            if (ElementMovedFlag == true) {
                setElementMovedFlag(false);
            }
        } else {
            alert('Please fill all the fields');
            setFlag(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo Title" onChange={(e) => setTodoTitle(e.target.value)} />
            <input type="text" placeholder="Todo Description" onChange={(e) => setTodoDescription(e.target.value)} />
            <input type="date" placeholder="Todo Due Date" onChange={(e) => setTodoDueDate(e.target.value)} />
            <input type="time" placeholder="Todo Due Time" onChange={(e) => setTodoDueTime(e.target.value)} />
            <select onChange={(e) => setTodoPriority(e.target.value)} >

                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
                <option value='Low'>Low</option>
            </select>

            <button type='button' onClick={() => setFlag(false)}>Cancel</button>
            <button type='submit' >Add Todo</button>
        </form>
    )

}

export default TakeTodoInput
