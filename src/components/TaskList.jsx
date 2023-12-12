import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='text-4xl text-white font-bold text-center'>No hay tareas aun</h1>;
  }

  //el div de abajo
  //Si hay tareas, el componente renderiza un <div> que contiene el resultado de mapear sobre el array tasks. Por cada tarea en el array, se renderiza un componente TaskCard al que se le pasa la tarea (task) como prop, junto con la función deleteTask que también se pasa como prop. Se utiliza la propiedad key para ayudar a React a identificar de manera única cada elemento del array en el DOM.
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
