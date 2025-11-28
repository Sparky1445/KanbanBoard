import { createContext, useContext, useState } from 'react'

const IsAddComponentClickedContext = createContext();

export function IsAddComponentClickedProvider({ children }) {
    const [isAddTodoClicked, setIsAddTodoClicked] = useState(false);
    const [isAddProgressClicked, setIsAddProgressClicked] = useState(false);
    const [isAddReviewClicked, setIsAddReviewClicked] = useState(false);
    const [isAddDoneClicked, setIsAddDoneClicked] = useState(false);

    return (
        <IsAddComponentClickedContext.Provider value={{ isAddTodoClicked, setIsAddTodoClicked, isAddProgressClicked, setIsAddProgressClicked, isAddReviewClicked, setIsAddReviewClicked, isAddDoneClicked, setIsAddDoneClicked }}>
            {children}
        </IsAddComponentClickedContext.Provider>
    )


}

export function useIsAddComponentClicked() {
    return useContext(IsAddComponentClickedContext);
}