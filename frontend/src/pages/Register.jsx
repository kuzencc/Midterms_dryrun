import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [createPassword, setCrPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !createPassword || !confPassword) {
      setErrorMessage('Please fill in all fields')
      return
    }

    if (createPassword !== confPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    setErrorMessage('')

    console.log('Email:', email)
    console.log('Password:', createPassword)

    navigate('/')
  }

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      {errorMessage && (
        <div className="alert alert-danger">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Create Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
            value={createPassword}
            onChange={(e) => setCrPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <div className='mt-3'>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}