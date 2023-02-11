import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Tarea from './components/Tarea';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [tareas, setTareas] = useState([])

  function changeInputValue (e) {
    setInput(e.target.value)
  }

  function agregarTarea (e) {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    const tareasActualizadas = [...tareas,nuevaTarea];
    setTareas(tareasActualizadas);
  }

  return (
    <div className='App'>
      <div className='AppContainer'>
        <form 
          className='form'
          onClick={agregarTarea} >
            <input 
              type="text" 
              className='input'
              onChange={changeInputValue} />
            <input 
              type="submit"   
              value="Agregar Tarea" />
        </form>
        {tareas.map(tarea=>{
          return( 
            <Tarea
              texto={tarea.texto} />)
        })}
      </div>
      
    </div>
  );
}

export default App;
