import React, { useState } from "react";

export const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (info) => {
    info.id = Date.now();
    setDb([...db, info]);
  };

  const updateData = (info) => {
    let newData = db.map((el) => (el.id === info.id ? info : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm('Are you sure you want to delete?');
    if (!isDelete) {
      return;
    }else{
        let newData = db.filter((el)=> el.id !== id);
        setDb(newData);
    }
  }

  return (
    <div>
      <h2>CRUD API </h2>
      <article>
        <form></form>
        <table></table>
      </article>
    </div>
  );
};
