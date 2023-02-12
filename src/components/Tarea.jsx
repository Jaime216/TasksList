import React, { useState } from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import '../styles/Tarea.css';

function Tarea ({ texto,id, eliminar, completada, completar}){

  const [input, setInput] = useState(texto)
  const [isEdit, setEdit] = useState(false)

  function editable () {
    setEdit(!isEdit)
  }

  function NoEdit () {
    return( 
      <div 
        className={`nota ${completada ? 'completada' : ''}`} 
        id={id} 
        onClick={completar}>
          <p>{input}</p>
          <div className="buttons">
            <button 
              className="edit"
              onClick={editable} >
              Edit
            </button>
            <div className="iconContainer"
                onClick={()=>eliminar(id)}>
                <TiDeleteOutline 
                className="icon"/>
            </div>
          </div>
          
        </div> 
      )}

      function Edit () {

        const [newValue, setNewValue] = useState(input)
      
        function setInputValue (e) {
          setNewValue(e.target.value)
        }

        function updateTask (e) {
          e.preventDefault()
          setInput(newValue)
          setEdit(false)
        }

        return(
          <div 
            className="EditContainer" >
            <form
              onSubmit={updateTask} >
              <input type="text" value={newValue} onChange={setInputValue} />
              <input type="button" value="Update" onClick={updateTask} />
            </form>
            
          </div>
        )
      }

  return(
    <div>
      {isEdit ? <Edit/> : <NoEdit/> }
    </div>
    
  )
};

export default Tarea;