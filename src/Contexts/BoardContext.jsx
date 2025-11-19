import { createContext, useContext, useState } from 'react'

const BoardContext = createContext();


export function BoardProvider({ children }) {
    const [boards, setBoards] = useState([{
        id: 1, name: 'Board1',
        todos: [],
        review: [],
        done: [],
        inProgress: []
    }]);

    const [activeBoardId, setActiveBoardId] = useState(1);

    function selectBoard(id) {
        setActiveBoardId(id);
    }

    function addBoard(BoardName) {
        setBoards(prev => [...prev,
        {
            id: (prev.length + 1), name: BoardName,
            todos: [],
            review: [],
            done: [],
            inProgress: []
        }
        ]);


    }

    function deleteBoard(id) {
        setBoards(prev => prev.filter(board => board.id !== id));
    }
    return (
        <BoardContext.Provider value={{ setBoards, boards, addBoard, deleteBoard, activeBoardId, selectBoard }}>
            {children}
        </BoardContext.Provider>
    )

}

export function useBoard() {
    return useContext(BoardContext);
}




