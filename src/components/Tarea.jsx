import React from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import '../styles/Tarea.css'

function Tarea ({ texto,id, eliminar, completada, completar, isEdit }){

  function NoEdit () {
    return( 
      <div 
        className={`nota ${completada ? 'completada' : ''}`} 
        id={id} 
        onclick={completar}>
          <p>{texto}</p>
          <div className="buttons">
            <button className="edit">
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
        return(
          <div>Modo editar</div>
        )
      }

  return(
    <div>
      {isEdit ? <Edit/> : <NoEdit/> }
    </div>
    
  )
};

export default Tarea;