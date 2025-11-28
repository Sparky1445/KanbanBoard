import { createContext, useContext } from 'react'
import { useBoard } from './BoardContext.jsx'
import { useState } from 'react';


const DIRTContext = createContext();







export function DIRTProvider({ children }) {
    const [MoveTo, setMoveTo] = useState(false);
    const { setBoards } = useBoard();

    function addTodo(id, todoData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, todos: [...board.todos, { id: board.todos.length + 1, ...todoData }]
            } : board)
        );
    }

    function addInProgress(id, ProgressData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, inProgress: [...board.inProgress, { id: board.inProgress.length + 1, ...ProgressData }]
            } : board)
        );
    }

    function addReview(id, ReviewData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, review: [...board.review, { id: board.review.length + 1, ...ReviewData }]
            } : board)
        );
    }


    function addDone(id, DoneData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, done: [...board.done, { id: board.done.length + 1, ...DoneData }]
            } : board)
        );
    }




    return (
        <DIRTContext.Provider value={{ addReview, addTodo, addInProgress, addDone, MoveTo, setMoveTo }}>
            {children}
        </DIRTContext.Provider>
    )

}



export function useDIRT() {
    return useContext(DIRTContext);
}