import React, { useState } from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import '../styles/Tarea.css';

function Tarea ({ texto,id, eliminar, completada, completar, updateTask}){

  const [isEdit, setEdit] = useState(false)

  function editable () {
    if(completada === false) setEdit(!isEdit)
  }

  function NoEdit () {
    return( 
      <div 
        className={`nota `} 
        id={id} 
        >
          <p 
            className={`${completada ? 'completada' : ''}`}
            onClick={()=>completar(id)} >
              {texto}
            </p>
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

        const [newValue, setNewValue] = useState(texto)
      
        function setInputValue (e) {
          setNewValue(e.target.value)
        }

        return(
          <div 
            className="editContainer" >
            <form
              onSubmit={(e)=>{
                e.preventDefault()
                updateTask(id, newValue, completada)
                setEdit(!isEdit)}} >
              <input className="editInput" type="text" value={newValue} onChange={setInputValue} />
              <input 
                className="updateInput" 
                type="button" 
                value="Update" 
                onClick={(e)=>{
                  e.preventDefault()
                  updateTask(id, newValue, completada)
                  setEdit(!isEdit)}} />
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