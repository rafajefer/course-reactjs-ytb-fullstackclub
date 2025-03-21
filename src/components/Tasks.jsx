import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks ({ tasks, onTaskClick, onDeleteTaskClick }) {

  const navitage = useNavigate()


  const onSeeDetailTaskClick = (id) => {
    navitage(`/detail-task?taskId=${id}`)
  }

  return <ul className="space-y-4 bg-slate-200 rounded-md shadow-md p-6">
    {tasks.map(task => (
      <li key={task.id} className="flex text-white gap-2">
        <button
          onClick={() => onTaskClick(task.id)}
          className={`bg-slate-400 hover:bg-slate-500 text-left w-full p-2 rounded-md cursor-pointer ${task.isCompleted && 'line-through'}`}
        >
          {task.title}
        </button>
        <button
          className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md cursor-pointer"
          onClick={() => onSeeDetailTaskClick(task.id)}
        >
          <ChevronRightIcon />
        </button>
        <button
          className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md cursor-pointer"
          onClick={() => onDeleteTaskClick(task.id)}
        >
          <TrashIcon />
        </button>
      </li>
    ))}
  </ul>
}

export default Tasks