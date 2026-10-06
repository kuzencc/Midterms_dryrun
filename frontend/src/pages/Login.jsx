import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login (){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    if(!password || !email){
      setErrorMessage("Please fill in all fields");
      return;
    }

    setErrorMessage("");
    console.log("Email:", email);
    console.log("Password:",password);     
    navigate("/")
  };

  return(
    <div className='container mt-5'>
      <h2>Login</h2>
      {errorMessage && (
        <div className='alert alert-danger'>
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type="email" className='form-control' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className="form-label">Password</label>
          <input type="password" className='form-control' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
      <div className='mt-3'>
          Create an account?{" "}
          <Link to="/register">Register</Link>
      </div>
    </div>
  )
}