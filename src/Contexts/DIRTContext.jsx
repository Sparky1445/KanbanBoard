import { createContext, useContext } from 'react'
import { useBoard } from './BoardContext.jsx'
import { useState } from 'react';


const DIRTContext = createContext();







export function DIRTProvider({ children }) {

    const { setBoards } = useBoard();

    const [ElementMovedFlag, setElementMovedFlag] = useState(false);

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

    function deleteElement(id, elementId, type) {
        setBoards(prevBoards =>
            prevBoards.map(board =>
                board.id === id
                    ? {
                        ...board,
                        [type]: board[type].filter(element => element.id !== elementId)
                    }
                    : board
            )
        );
    }


    return (
        <DIRTContext.Provider value={{ addReview, addTodo, addInProgress, addDone, deleteElement, ElementMovedFlag, setElementMovedFlag }}>
            {children}
        </DIRTContext.Provider>
    )

}



export function useDIRT() {
    return useContext(DIRTContext);
}