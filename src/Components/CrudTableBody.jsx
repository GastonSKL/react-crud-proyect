import React from "react";
import './CrudTableBody.css'
export const CrudTableBody = ({ el, setDataEdit, deleteData }) => {
  let {raza, tamaño, id} = el;
    return (
    <tr>
      <td>{raza}</td>
      <td>{tamaño}</td>
      <td>
        <button onClick={()=> setDataEdit(el)}>Editar</button>
        <button onClick={()=> deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
