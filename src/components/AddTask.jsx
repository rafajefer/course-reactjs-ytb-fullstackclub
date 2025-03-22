
import { useState } from 'react'
import Input from './Input'
import Textarea from './Textarea'

function AddTask ({ onAddTaskClick }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmitClick = (title, description) => {
        title = title.trim()
        description = description.trim()
        if (!title) {
            alert('Digite o título da tarefa')
            return
        }

        if (!description) {
            alert('Digite a descrição da tarefa')
            return
        }

        onAddTaskClick(title, description)
        setTitle('')
        setDescription('')
    }

    return (
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col">
        <Input
            type="text"
            placeholder="Digite o título da tarefa"
            className="w-full p-2 border border-gray-300 outline-slate-400 rounded-md px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
            placeholder="Digite a descrição da tarefa"
            className="w-full p-2 border border-gray-300 outline-slate-400 rounded-md px-4 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button
            className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
            onClick={() => onSubmitClick(title, description)}
        >
            Adicionar
        </button>
      </div>
    )
}

export default AddTask