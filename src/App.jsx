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

  function completar (id) {
    setTareas(tareas.map(tarea=>{
      if(tarea.id === id){
        tarea.completada = ! tarea.completada
      }
      return tareas
    }))
    setTareas([...tareas]);
    window.localStorage.setItem('Tareas',JSON.stringify(tareas))
  }

  function eliminar (id) {
    let taraeasAct = tareas.filter(tarea => tarea.id !== id);
    setTareas(taraeasAct)
    window.localStorage.setItem('Tareas',JSON.stringify(taraeasAct))
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
      window.localStorage.setItem('Tareas',JSON.stringify(tareasActualizadas))
    }else {
      console.log("Introduzca texto")
    }}

    
    function updateTask (id, newValue, completada) {
      tareas.map(tarea=>{
        if(id === tarea.id){
          tarea.texto=newValue
        }
        return tareas
      })
      setTareas([...tareas])
      window.localStorage.setItem('Tareas',JSON.stringify(tareas))
    }


  return (
    <div className='App'>
      {window.addEventListener("load",()=>{
        if(window.localStorage.getItem('Tareas') === null){
            window.localStorage.setItem('Tareas',JSON.stringify([]))
        }
        setTareas(JSON.parse(window.localStorage.getItem('Tareas')))
      })}
      <div className='AppContainer'>
        <form 
          className='form'
          onSubmit={agregarTarea} >
            <input 
              autoComplete='off'
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
                  eliminar={eliminar}
                  completada={tarea.completada}
                  texto={tarea.texto}
                  isEdit={true}
                  updateTask={updateTask}
                  completar={completar} />)
            })}
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
