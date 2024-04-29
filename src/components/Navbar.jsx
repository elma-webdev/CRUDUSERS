import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h2>
          <Link to={`/`}>CRUsers</Link>  
        </h2>
      <ul>
       
        <li><Link to={`/new`} className='new-btn'>Novo post</Link></li>
        <li><Link to={`/`}>Home</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar