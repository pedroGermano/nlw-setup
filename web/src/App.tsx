import './styles/global.css';
import { Habit } from "./components/Habits"

function App() {

  return (
    <>
      <Habit completed={3} />
      <Habit completed={13} />
      <Habit completed={33} />
      <Habit completed={31} />
    </>
  )
}

export default App
