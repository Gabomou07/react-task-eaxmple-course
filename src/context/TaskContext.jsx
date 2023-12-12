import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';
//createContext es una función que se utiliza en React para crear un objeto de contexto. El contexto en React es una herramienta que permite pasar datos a través del árbol de componentes sin necesidad de pasar las props manualmente en cada nivel. Es especialmente útil para compartir información global en una aplicación.
//El Provider es un componente que se utiliza para envolver la parte de la aplicación donde quieres hacer disponible el contexto. Se utiliza para proveer los valores que serán accesibles por los componentes hijos.
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }
  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}

export default TaskContext;
