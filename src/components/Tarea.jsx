import React from "react";
import { TiDeleteOutline } from 'react-icons/ti';
import '../styles/Tarea.css'

function Tarea ({ texto,id, onclick, completada, completar, edit, editBoolean }){
  return(
      <div 
      className='nota'
      id={id} >
        <p 
          className={`${completada ? 'completada' : ''}`}
          onClick={()=>completar(id)}>
            {texto}
          </p>
        <div 
          className="buttons" >
            <form 
            onClick={e=>{e.preventDefault();edit()}} >
              <input 
                type="text" 
                placeholder="Edit"
                className={`${editBoolean ? 'button' : 'editInput'}`}/>
            </form>
          <div className="iconContainer">
              <TiDeleteOutline 
              onClick={()=>onclick(id)}
              className="icon"/>
          </div>
        </div>
        
      </div>
  )
};

export default Tarea;