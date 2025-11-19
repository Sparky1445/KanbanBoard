import { createContext, useContext } from 'react'
import { useBoard } from './BoardContext.jsx'


const DIRTContext = createContext();





export function DIRTProvider({ children }) {
    const { setBoards } = useBoard();

    function addTodo(id, todoData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, todos: [...board.todos, { id: Date.now(), ...todoData }]
            } : board)
        );
    }

    function addInProgress(id, ProgressData) {
        setBoards(prev =>
            prev.map(board => board.id === id ? {
                ...board, inProgress: [...board.inProgress, { id: Date.now(), ...ProgressData }]
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




    return (
        <DIRTContext.Provider value={{ addReview, addTodo, addInProgress }}>
            {children}
        </DIRTContext.Provider>
    )

}



export function useDIRT() {
    return useContext(DIRTContext);
}