import React from "react";
import './CrudTableBody.css'
export const CrudTableBody = ({ el, setDataEdit, deleteData }) => {
  let {name, size, id} = el;
    return (
    <tr>
      <td>{name}</td>
      <td>{size}</td>
      <td>
        <button onClick={()=> setDataEdit(el)}>Editar</button>
        <button onClick={()=> deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
