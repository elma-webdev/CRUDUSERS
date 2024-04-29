import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import fetch from '../axios/config'
import './newpost.css'
const NewPost = () => {

    const [inputdata, Setinputdata]=useState({
        nome:'',
        idade:'',
        sexo:'',
        salario:'',
        morada:'',
    })


   async function HandleSubmit(){
    await fetch.post('/post', inputdata)
    .then(res=>{
        window.alert("Dados criados", res)
    }).catch(error=>{
        console.log("dados n criados")
    })

   }

  return (
    <div>
        <form action="" onSubmit={HandleSubmit}>

        <div className='form-control'>

          <label htmlFor='nome'>Nome</label>
          <input type='text' 
          name='nome' 
          id='nome' 
          onChange={(e)=>Setinputdata({...inputdata, nome: e.target.value})}
          ></input>

          <label htmlFor='idade'>Idade</label>
          <input type='number' 
          name='idade' 
          id='idade' 
          onChange={(e)=>Setinputdata({...inputdata, idade: e.target.value})}
          ></input>

          <label htmlFor='sexo'>Sexo</label>
          <input type='text' 
          name='sexo' 
          id='sexo' 
          onChange={(e)=>Setinputdata({...inputdata, sexo: e.target.value})}
          ></input>

          <label htmlFor='salario'>Salario</label>
          <input type='number' 
          name='salario' 
          id='salario' 
          onChange={(e)=>Setinputdata({...inputdata, salario: e.target.value})}
          ></input>

          <label htmlFor='morada'>Morada</label>
          <input type='text' 
          name='morada' 
          id='morada' 
          onChange={(e)=>Setinputdata({...inputdata, morada: e.target.value})}
          ></input>

        </div>

    
          <Link to={`/`} className='new-btn' onClick={HandleSubmit}>Criar post</Link>
        </form>
    </div>
  )
}

export default NewPost