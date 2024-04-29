import React from 'react'
import { useState, useEffect} from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import fetch from '../axios/config'
import './newpost.css'
const Editar = () => {

    const navegate=useNavigate()
    const {id}=useParams()

    const [dado, setDados]=useState([])

    useEffect(()=>{
        async function get(){
        await fetch.get('/getall/'+id)
       .then(res=>{
        setDados(res.data)
       })
       .catch(error=>{
        console.log('n pegos', error)
       })}
        get()
        }, []) 


    async function HandleSubmit(event){
        event.preventDefault()
        await fetch.put('/put/'+id, dado)
        .then(res=>{
            window.alert("Dados actualizados")
            navegate(`/`)
        }).catch(error=>{
            console.log(error)
        })
       }
         

  return (
    <div>
        <form action="" onSubmit={HandleSubmit} key={dado._id}>

        <div className='form-control'>

          <label htmlFor='nome'>Nome</label>
          <input type='text' 
          name='nome' 
          id='nome' 
          value={dado.nome}
        onChange={e=>setDados({...dado, nome: e.target.value})}
        
          
          ></input>

          <label htmlFor='idade'>Idade</label>
          <input type='number' 
          name='idade' 
          id='idade' 
          value={dado.idade}
        onChange={(e)=>setDados({...dado, idade: e.target.value})}
          ></input>

          <label htmlFor='sexo'>Sexo</label>
          <input type='text' 
          name='sexo' 
          id='sexo' 
          value={dado.sexo}
        onChange={(e)=>setDados({...dado, sexo: e.target.value})}
          ></input>

          <label htmlFor='salario'>Salario</label>
          <input type='number' 
          name='salario' 
          id='salario' 
          value={dado.salario}
        onChange={(e)=>setDados({...dado, salario: e.target.value})}
          ></input>

          <label htmlFor='morada'>Morada</label>
          <input type='text' 
          name='morada' 
          id='morada' 
          value={dado.morada}
        onChange={(e)=>setDados({...dado, morada: e.target.value})}
          ></input>

        </div>
    
          <Link className='new-btn' onClick={HandleSubmit}>Actualizar post</Link>
        </form>
    </div>
  )
}
export default Editar