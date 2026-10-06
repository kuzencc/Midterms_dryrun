import {NavLink} from 'react-router-dom' 
export default function Navbar() {
  return (
    <nav navbar navbar-expand bg-body-tertiary>
      <ul>
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
        <li><NavLink to="/records" className="nav-link">Records</NavLink></li>      
      </ul>
    </nav>
  )
}