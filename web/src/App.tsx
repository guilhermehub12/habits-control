import './styles/global.css'

import { Habit } from "./components/Habits"

function App() {
    return (
    <>
      <Habit completed={2} />
      <Habit completed={5} />
      <Habit completed={10} />
      </>
  )
}

export default App
