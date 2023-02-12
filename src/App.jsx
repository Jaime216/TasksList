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
    if(input.trim()){
      const nuevaTarea = {
        id: uuidv4(),
        texto: input,
        completada: false
      };
      const tareasActualizadas = [nuevaTarea,...tareas];
      setTareas(tareasActualizadas);
      setInput('');
      document.getElementById('input').value = '';
    }else {
      console.log("Introduzca texto")
    }}

  return (
    <div className='App'>
      <div className='AppContainer'>
        <form 
          className='form'
          onSubmit={agregarTarea} >
            <input 
              type="text" 
              className='input'
              id='input'
              onChange={changeInputValue} />
            <input 
            className='inputButton'
              type="submit"   
              value="Agregar Tarea" />
        </form>
        <div
          className='tareasContainer' >
            {tareas.map(tarea=>{
              return( 
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  completada={tarea.completada}
                  texto={tarea.texto}
                  isEdit={true} />)
            })}
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
