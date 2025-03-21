import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const fetchTasks = async () => {
      if (tasks.length > 0) return
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      const data = await response.json()
      const newTasks = data.map(task => ({
        id: task.id,
        title: task.title,
        description: task.title,
        isCompleted: task.completed
      }))
      setTasks(newTasks)
    }
    fetchTasks()
  }, [])

  const onTaskClick = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    setTasks(newTasks)
  }

  const onDeleteTaskClick = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const onAddTaskClick = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App