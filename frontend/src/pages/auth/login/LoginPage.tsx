import './loginPage.css'
import '../../../defaultNavLink.css'
import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'

const LoginPage = () => {

  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const loginUser = async (e: any) => {
    e.preventDefault()

    const loginCredentials = {
      email,
      password
    }

    try {
      const res = await axios.post(
        '/api/login',
        loginCredentials,
      )

      if (res.status === 200) {
        const { accessToken, email, username } = res.data
        login(email, accessToken, username)
        navigate('/dashboard')
      }
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.response.data.message)
    }
  }

  return (
    <div className='entireContainer'>
      <form onSubmit={loginUser} className='heroForm'>
        <h4>
          Login
        </h4>
        <label
          className='inputLabel'
          htmlFor='email'
        >
          Email
        </label>
        <input
          type="text"
          className='inputFields'
          onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
          id='email'
          required
        />
        <label
          className='inputLabel'
          htmlFor='password'
        >
          Password
        </label>
        <input
          type="password"
          className='inputFields'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          required
        />
        <NavLink className='nav-link' to='/'><p className='forgotPassword'>Forgot Password?</p></NavLink>
        <button>Submit</button>
        <p className='errorMessage inputLabel'>{errorMessage}</p>
        <p>Don't have an account? <NavLink to='/signup'>Sign up</NavLink></p>
      </form>
    </div>
  )
}

export default LoginPage