
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

function App() {

  return (
    <>

      <div className="Wrapper">
        <BoardProvider>


          <div className="kanban-frame">
            <h1>Kanban Board</h1>
            <KanbanList />
            <AddBoard />
          </div>
          <DIRTProvider>
            <div className="BoardDetails">
              <TodoSection />
              <InProgressSection />
              <ReviewSection />
              <DoneSection />
            </div>


          </DIRTProvider>

        </BoardProvider >
      </div>

    </>
  )

}

export default App
