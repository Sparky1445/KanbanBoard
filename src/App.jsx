
import './App.css'
import KanbanList from './Componenets/KanbanComponents/KanbanList.jsx'
import InProgressSection from './Componenets/InProgress/InProgressSection.jsx'
import ReviewSection from './Componenets/Review/ReviewSection.jsx'
import TodoSection from './Componenets/Todo/TodoSection.jsx'
import DoneSection from './Componenets/Done/DoneSection.jsx'
import AddBoard from './Functionality/AddBoard.jsx'
import { BoardProvider } from './Contexts/BoardContext.jsx'
import { DIRTProvider } from './Contexts/DIRTContext.jsx'

import './Styles/kanban.css'
import { IsAddComponentClickedProvider } from './Contexts/isAddComponentClickedContext.jsx'

function App() {

  return (
    <>

      <div className="Wrapper">
        <BoardProvider>


          <div className="kanban-frame">
            <div className="kanban-Header-List">
              <h1>Kanban Board</h1>
              <KanbanList />
            </div>
            <div className="kanban-board-add">
              <AddBoard />
            </div>
          </div>
          <DIRTProvider>
            <div className="BoardDetails">
              <IsAddComponentClickedProvider>
                <TodoSection />
                <InProgressSection />
                <ReviewSection />
                <DoneSection />
              </IsAddComponentClickedProvider>
            </div>


          </DIRTProvider>

        </BoardProvider >
      </div>

    </>
  )

}

export default App
