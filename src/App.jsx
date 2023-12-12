//con ctrl + x eliminas una linea de codigo
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  //Aquí estás declarando un estado llamado tasks utilizando el gancho useState. tasks es el estado actual, y setTasks es una función que puedes usar para actualizar ese estado. Se inicializa con un array vacío.

  //const [tasks, setTasks] = useState([]);

  //Utilizas el gancho useEffect para ejecutar una función después de que el componente se monte. En este caso, estableces el estado de tasks con los datos importados (data). El segundo argumento ([]) indica que esta función debe ejecutarse solo una vez, después del montaje inicial.

  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  //Respectivas funciones para cada las tareas
  //con manejo de estados
  //y sus efectos

  //Esta función createTask toma un título de tarea como argumento y actualiza el estado tasks añadiendo una nueva tarea al final del array. Cada nueva tarea tiene un título, un ID basado en la longitud actual del array tasks, y una descripción fija ("Nueva Tarea").

  /*function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }*/

  //Parámetro taskId:
  //La función toma un parámetro llamado taskId, que representa el identificador único de la tarea que se va a eliminar.

  /*
  function deleteTask(taskId){
   setTasks(tasks.filter(task => task.id !== taskId))
  }*/

  //Le pasamos por props las respectivs funciones a cada tarea
  // uno para crear y otro para eliminar , tambien pasando los datos
  //a la lista

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};
export default App;
