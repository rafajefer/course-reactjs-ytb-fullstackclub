import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Tasks ({ tasks, onTaskClick, onDeleteTaskClick }) {

  const navitage = useNavigate()


  const onSeeDetailTaskClick = (id) => {
    navitage(`/detail-task?taskId=${id}`)
  }

  return <ul className="space-y-4 bg-slate-200 rounded-md shadow-md p-6">
    {tasks.length === 0 && <p className="text-slate-600 text-center">Nenhuma tarefa encontrada</p>}
    {tasks.map(task => (
      <li key={task.id} className="flex text-white gap-2">
        <button
          onClick={() => onTaskClick(task.id)}
          className={`bg-slate-400 hover:bg-slate-500 text-left w-full p-2 rounded-md cursor-pointer ${task.isCompleted && 'line-through'}`}
        >
          {task.title}
        </button>
        <Button
          onClick={() => onSeeDetailTaskClick(task.id)}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          onClick={() => onDeleteTaskClick(task.id)}
        >
          <TrashIcon />
        </Button>
      </li>
    ))}
  </ul>
}

export default Tasks