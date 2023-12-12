import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
('../context/TaskContext');

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  //Esta función maneja el evento de envío del formulario. Detiene el comportamiento predeterminado del formulario, crea una nueva tarea utilizando el título del estado actual (title), y llama a la función createTask (pasada como prop) con la nueva tarea.
  //set title(""),SetDescription("") hace que los campos estn vacios despues del evento creado
  const handleSubmit = e => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  //funciones
  //la funcion autofocus al momento de refrescar la pagina te deja selecionado por defecto el cursor en el input
  //el onchange
  //onChange={e => setTitle(e.target.value)} Este es un evento que se activa cada vez que el contenido del campo de entrada cambia. En este caso, estás utilizando la función setTitle para actualizar el estado title con el valor actual del campo de entrada (e.target.value). En otras palabras, cada vez que el usuario escribe algo en el campo, se actualiza el estado title con ese nuevo valor.
  //value={title} Este atributo establece el valor actual del campo de entrada. En React, este patrón se utiliza para convertir el campo de entrada en un componente controlado. Un componente controlado toma su valor actual del estado de React y lo actualiza cada vez que se produce un cambio.
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={e => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Escribe la decipción de tu tarea"
          onChange={e => setDescription(e.target.value)}
          value={description}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white mx-auto grid">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
