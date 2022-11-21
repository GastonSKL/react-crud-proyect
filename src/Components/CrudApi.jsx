import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import './CurdApp.css'

export const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (info) => {
    info.id = Date.now();
    console.log(info);
    setDb([...db, info]);
  };

  const updateData = (info) => {
    let newData = db.map(el=> el.id === info.id ? info : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm('¿Realmente desea eliminar la entrada?');

    if(isDelete){
        let newData = db.filter(el => el.id != id) ;
        setDb(newData)  
    }else{
        return
    }
  };

  return (
    <div className="app__container">
      <h2 className="app__title">CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />

      <CrudTable data={db} deleteData={deleteData} setDataEdit={setDataEdit} />
    </div>
  );
};
