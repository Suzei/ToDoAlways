import { Task } from "../../interfaces"; 
import TodoItem from './TodoList.js'

interface TodoProps {
  task: Task
  CompletedTask(taskNameDelete: string,): void
}

const ToDoItems = ({task, CompletedTask}: TodoProps) => {
  return (
    <>
      <TodoItem>
        
      </TodoItem>
    </>
  )
}