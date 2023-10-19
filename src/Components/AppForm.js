import React from 'react'
import App from'../App'

const AppForm = () => {
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
        <h>AppForm.js</h><br/>
        <input placeholder='Nombre: '/><br/>
        <input placeholder='Edad: '/><br/>
        <input placeholder='Genero: '/><br/>
        <button>Guardar</button>
      
    </div>
  )
}

export default AppForm
