import React, { useEffect, useState } from 'react'
import './CrudForm.css'

const initialForm = {
    id: "",
    name: "",
    size: ""
}

export const CrudForm = ({createData, updateData, dataEdit, setDataEdit}) => {

    const [form, setForm] = useState(initialForm)
    useEffect(()=>{
        if(dataEdit){
            setForm(dataEdit)
        }else{
            setForm(initialForm)
        }
    },[dataEdit])

    const handleChange = (e) =>{
        setForm
        ({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name || !form.tamaño){
            alert("Datos incompletos!");
            return;
        }

        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }

        handleReset();

    }

    const handleReset = (e) =>{ 
        setForm(initialForm);
        setDataEdit(null);
    }

    return (
    <div>
        <h3>{dataEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>

            <input type="text" name='name' placeholder='Raza' onChange={handleChange} value={form.name}/>

            <input type="text" name='tamaño' placeholder='Tamaño' onChange={handleChange} value={form.tamaño}/>

            <input type='submit' value='Enviar'/>

            <input type='reset' value='Limpiar' onReset={handleReset }/>

        </form>
    </div>
  )
}
