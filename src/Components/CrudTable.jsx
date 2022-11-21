import React from "react";
import { CrudTableBody } from "./CrudTableBody";
import './CrudTable.css'

export const CrudTable = ({ data, deleteData, setDataEdit }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Raza</th>
            <th>Tamaño</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableBody
                setDataEdit={setDataEdit}
                deleteData={deleteData}
                key={el.id}
                el={el}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
