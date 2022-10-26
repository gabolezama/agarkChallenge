import './App.css';
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { deleteById, getData } from './AppController';
import { AppContext, ContextType, Idata } from './Context';

export default function HomePage(): JSX.Element {

  const {data, setData, setItemToEdit}: any = useContext(AppContext) as ContextType;
  const [reload, setReload] = useState<boolean>(false)

  useEffect(()=>{

    getData().then(res => setData(res));
  }, [data, reload])
  
  function handleEdit(item: Idata){
    setItemToEdit(item);
  }
  function handleDelete(id: string){ 
    deleteById(id);
    setReload(!reload)
  }
  function handleCreate(){
    setItemToEdit({
      id: '',
      first_name: '',
      second_name: '',
      email: '',
      avatar: ''
    });
  }

  return (
    <div className='App container'>
      <h1>Bienvenido a la Lista de Usuarios!!</h1>
      <Link to="/edit"><button onClick={()=> handleCreate()} className="btn btn-success">Crear Nuevo</button></Link>
      <div className='row'>
      {
        data &&
        data.map((item: Idata) =>(

        <div className="card col-sm-3" style={{ marginLeft: '20px', marginTop: '20px'}}>
          <div className="card-body">
            <img style={{width: '10rem', height: '10rem'}} src={`${item.avatar}`}/>
            <h5 className="card-title">Usuario ID: {item.id}</h5>
            <p className="card-text">Nombre Completo: {item.first_name} {item.second_name}</p>
            <p className="card-text">Mail: {item.email}</p>
            <Link to="/edit"><button onClick={()=> handleEdit(item)} className="btn btn-warning">Editar</button></Link>
            <button onClick={()=> handleDelete(item.id)} className="btn btn-danger">ELiminar</button>
          </div>
        </div>
        ))
      }
      </div>
    </div>
  );
}
