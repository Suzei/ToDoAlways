import { useState } from "react"
import { Task } from "./interfaces"
function App() {
  const [todoTask, setTask] = useState<string>("")
  const [todoTime, setTime] = useState<number>(0)
  const [todoList, setList] = useState<Task[]>([])

  const handleChange = (e) : void => {
    if (e.target.name === "task") x
  }
  return (
  <>
  <h2>bussy</h2>
  </>    
  )
}

export default App
