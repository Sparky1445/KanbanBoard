
import './App.css'
import KanbanList from './Componenets/KanbanList'
import AddBoard from './Functionality/AddBoard.jsx'
import { BoardProvider } from './Contexts/BoardContext.jsx'

function App() {

  return (
    <>
      <h1>Kanban Board</h1>

      <BoardProvider>

        <KanbanList />
        <AddBoard />


      </BoardProvider>
    </>
  )

}

export default App
