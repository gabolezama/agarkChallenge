import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { Node } from 'typescript';
import { create, deleteById, editById } from './AppController';
import { Idata } from './Context';

export default function EditAndCreate({context}: any) {
    const { itemToEdit }: any = useContext(context)
    console.log(itemToEdit);
    
    const [editting, setEditting] = useState<boolean>(!!itemToEdit?.first_name);
    const [userInfo, setUserInfo] = useState<Idata>(editting? itemToEdit : {})

    function setInputValues(e: React.ChangeEvent<HTMLInputElement>){
        setUserInfo({
            ...userInfo,
            [e.target.id]: e.target.value
        })
    }
  return (
    <div className='container'>
        <h3>{ editting? `Editando Usiario ID:${itemToEdit?.id}`: 'Creacion de nuevo Usuario'}</h3>
        <div>
            <input id='first_name' onChange={(e)=> setInputValues(e)} value={userInfo?.first_name || ''} className="form-control" type="text" placeholder="First Name" aria-label="default input example"/>
            <input id='second_name'onChange={(e)=> setInputValues(e)} value={userInfo?.second_name || ''} className="form-control" type="text" placeholder="Secend Name" aria-label="default input example"/>
            <input id='email' onChange={(e)=> setInputValues(e)} value={userInfo?.email || ''} className="form-control" type="text" placeholder="Email" aria-label="default input example"/>
            <input id='avatar'onChange={(e)=> setInputValues(e)} value={userInfo?.avatar || ''} className="form-control" type="text" placeholder="Avatar" aria-label="default input example"/>
        </div>
        <div>
            <Link to="/"><button style={{marginTop: '10px'}} onClick={()=> editting? editById(itemToEdit.id, userInfo) : create(userInfo)} className="btn btn-success">Guardar</button></Link>
            <Link to="/"><button style={{marginTop: '10px', marginLeft: '30px'}} className="btn btn-danger">Cancelar</button></Link>
            {editting && <Link to="/"><button style={{marginTop: '10px', marginLeft: '30px'}} onClick={()=> deleteById(itemToEdit.id)}className="btn btn-warning">Eliminar</button></Link>}
        </div>
    </div>
  )
}
