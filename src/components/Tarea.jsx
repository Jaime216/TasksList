import React from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import '../styles/Tarea.css'

function Tarea ({ texto,id, onclick, completada, completar }){
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
              onClick={()=>onclick(id)}>
              <TiDeleteOutline 
              className="icon"/>
          </div>
        </div>
        
      </div>
  )
};

export default Tarea;