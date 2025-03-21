import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function DetailTaskPage() {

  const [searchParams] = useSearchParams();
  const taskId = searchParams.get('taskId');

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(task => task.id == taskId);

  const navitage = useNavigate();

  const onBackButtonClick = () => {
    // navitage('/');
    // window.history.back();
    navitage(-1);
  }

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center  p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button className="absolute top-0 left-0 p-2 text-slate-100 cursor-pointer" onClick={onBackButtonClick}>
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 rounded-md p-4">
          <h2 className="text-xl font-bold text-slate-600">{task.title}</h2>
          <p className="text-slate-600">{task.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailTaskPage;