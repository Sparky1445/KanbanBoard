import { createContext, useContext, useState } from 'react'

const BoardContext = createContext();


export function BoardProvider({ children }) {
    const [boards, setBoards] = useState([{ id: 1, name: 'Board1', todos: [], review: [], done: [], inProgress: [] }]);

    function addBoard(BoardName) {
        setBoards(prev => [...prev,
        { id: (prev.length + 1), name: BoardName, todos: [], review: [], done: [], inProgress: [] }
        ]);

        console.log(boards);
    }

    function deleteBoard(id) {
        setBoards(prev => prev.filter(board => board.id !== id));
    }
    return (
        <BoardContext.Provider value={{ boards, addBoard, deleteBoard }}>
            {children}
        </BoardContext.Provider>
    )

}

export function useBoard() {
    return useContext(BoardContext);
}




