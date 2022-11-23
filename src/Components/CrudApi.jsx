import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Mesagge } from "./Mesagge";

import "./CurdApp.css";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/razas";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = { 
      body: data,
      headers: {"content-type": "application/json"}
     };

    helpHttp()
      .post(url, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, res]);
        } else {
          setError(res);
        }
      });
    setDb([...db, data]);
  };

  const updateData = (info) => {
    let newData = db.map((el) => (el.id === info.id ? info : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Realmente desea eliminar la entrada?");

    if (isDelete) {
      let newData = db.filter((el) => el.id != id);
      setDb(newData);
    } else {
      return;
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
      {loading && <Loader />}
      {error && (
        <Mesagge
          msg={`Error ${error.status}:${error.statusText}`}
          bgColor="White"
        />
      )}
      {db && (
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataEdit={setDataEdit}
        />
      )}
    </div>
  );
};
