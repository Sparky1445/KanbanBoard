
import './App.css'
import KanbanList from './Componenets/KanbanList'
import InProgressSection from './Componenets/InProgressSection.jsx'
import ReviewSection from './Componenets/ReviewSection.jsx'
import AddBoard from './Functionality/AddBoard.jsx'
import { BoardProvider } from './Contexts/BoardContext.jsx'
import TodoSection from './Componenets/TodoSection.jsx'
import { DIRTProvider } from './Contexts/DIRTContext.jsx'
import DoneSection from './Componenets/DoneSection.jsx'
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
