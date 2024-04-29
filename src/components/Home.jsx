import React, { useEffect, useState } from 'react'
import fetch from '../axios/config'
import { Link, useParams} from 'react-router-dom'
import { FaTrash, FaPen } from 'react-icons/fa'

const Home = () => {

 
    async function HandleDelete(id){
        const conf=window.confirm('Queres apagar?')
        if(conf){
          await fetch.delete('/delete/'+id) 
          Setposts(posts.filter(post=>post._id!==id))
       }}

    const [posts, Setposts]=useState([])

    useEffect( ()=>{
        const get= async()=>{
            const data= await fetch.get('/getall')
            .then(response=> {
                console.log(response.data)
                Setposts(response.data)
            })
            .catch(error=>console.log('Erro ao pegar dados', error))}

         get()
    }, [])


  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Morada</th>
                <th>Salário</th>
            </tr>
            </thead>
            <tbody>
        {
            posts.map(post=>{
                return(
                    <tr key={posts._id}>
                        <td>{post.nome}</td>
                        <td>{post.idade}</td>
                        <td>{post.sexo}</td>
                        <td>{post.morada}</td>
                        <td>{post.salario}</td>
                        <td>
                        <ul style={{"display":'flex'}}>
                            <li>
                            <Link to={`/posts/${post._id}`}><FaPen/>
                            </Link>  
                            </li>

                            <li>
                            <Link onClick={()=>HandleDelete(post._id)}><FaTrash/>
                            </Link>
                            </li>
    
                        </ul>
                        </td>
                    </tr>
                )
            }).sort((post)=>post.nome)
        }
    

            </tbody>
        </table>
    </div>
  )
}

export default Home