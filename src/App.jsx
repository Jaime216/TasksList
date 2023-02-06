import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Tarea from './components/Tarea';
import { useState } from 'react';

function App() {

  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState('');

  const setValue = e => {
    setInput(e.target.value)
    console.log(input)
  }

  const crearTareas = e => {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    if (nuevaTarea.includes("pene")){
      alert("eee pillin")
      return
    }
    setTareas([...tareas,nuevaTarea]);
    let tareasAct = [...tareas,nuevaTarea];
    window.localStorage.setItem('Tareas',JSON.stringify(tareasAct))
  }

  const eliminarTareas = id => {
    let Tareas = tareas.filter(tarea=>id!==tarea.id);
    setTareas(Tareas)
    window.localStorage.setItem('Tareas',JSON.stringify(Tareas))
  }

  const completar = e => {
    console.log(e)
  }

  return (
    <div className="App">
      {window.addEventListener("load",()=>{
        let tareasAnt = JSON.parse(window.localStorage.getItem('Tareas'));
        setTareas([...tareasAnt])
      })}
      <div className='notesContainer'>
        <h1 className='title'>
            Lista de Tareas
        </h1>
        <form
        onSubmit={crearTareas} >
        
          <input 
            className='input'
            type='text' 
            maxLength={20}
            onChange={setValue}/>
          <button 
            type='submit'
            className='button' >Agregar Tarea</button>
        </form>
        <div className='notas' >
            {tareas.map(tarea=>{
              return (
                <Tarea 
                  completar={completar}
                  key={tarea.id}
                  texto={tarea.texto}
                  id={tarea.id}
                  completada={tarea.completada} 
                  onclick={eliminarTareas} />
            )})}
        </div>
      </div>
    </div>
  );
}

export default App;
