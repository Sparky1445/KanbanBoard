
import './App.css'
import KanbanList from './Componenets/KanbanList'
import InProgressSection from './Componenets/InProgressSection.jsx'
import ReviewSection from './Componenets/ReviewSection.jsx'
import AddBoard from './Functionality/AddBoard.jsx'
import { BoardProvider } from './Contexts/BoardContext.jsx'
import TodoSection from './Componenets/TodoSection.jsx'
import { DIRTProvider } from './Contexts/DIRTContext.jsx'

function App() {

  return (
    <>
      <h1>Kanban Board</h1>

      <BoardProvider>
        <KanbanList />
        <AddBoard />
        <DIRTProvider>
          <TodoSection />
          <InProgressSection />
          <ReviewSection />

        </DIRTProvider>

      </BoardProvider>

    </>
  )

}

export default App
