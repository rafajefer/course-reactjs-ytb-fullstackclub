import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      description: 'Estudar programação para ficar craque',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar Inglês',
      description: 'Estudar inglês para ficar fluente',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Estudar, Estudar, Estudar e Estudar',
      description: 'Estudar para ficar craque',
      isCompleted: false
    }
  ])

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