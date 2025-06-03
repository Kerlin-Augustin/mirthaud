import './signupPage.css';
import '../../../defaultNavLink.css'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

const SignupPage = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accountType, setAccountType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const createAccount = async (e: any) => {
    e.preventDefault()

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.')
      return
    }

    const signupInformation = {
      username,
      email,
      accountType,
      password,
    }

    try {
      const res = await axios.post('/api/signup', signupInformation)
      if (res.status === 201) {
        const { accessToken } = res.data
        login(email, accessToken, username)
        navigate('/dashboard')
      }
    } catch (err: any) {
      setErrorMessage(err.response.data.message)
      console.error(err)
    }

  }

  // Added local storage so the tokens can persisent when someone refreshes the page

  return (
    <div>
      <section className='primarySection'>
        <NavLink to='/' className='nav-link'>
          <div className='logo'>
            MIRTHAUD
          </div>
        </NavLink>
        <h1 className='h1'>
          Navigate your career with precision
        </h1>
        <ul>
          <li className='li'>
            <h4 className='h4'>Join millions growing their network and career</h4>
            <p className='p'>Start building connections, discovering opportunities, and showcasing your professional story — all in one place.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Bridge the gap between ambition and opportunity</h4>
            <p className='p'>Whether you’re job hunting, hiring, or networking, Mirthaud connects you to the people and insights that move your career forward.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Upload your resume. Tell your story.</h4>
            <p className='p'>Turn your experience into opportunity. Let your profile work for you — attracting jobs, connections, and recognition.</p>
          </li>
          <li className='li'>
            <h4 className='h4'>Smarter career moves start here</h4>
            <p className='p'>Explore jobs, industry trends, and professional insights tailored to your goals — all from your personalized Mirthaud feed.</p>
          </li>
        </ul>
      </section>
      <div>
        <form onSubmit={createAccount} className='heroForm'>
          <h4>
            Create your Mirthaud account
          </h4>
          <label
            className='inputLabel'
            htmlFor='name'
          >
            Full Name
          </label>
          <input
            type="text"
            className='inputFields'
            onChange={(e) => setUserName(e.target.value.toLowerCase())}
            id='name'
            required
          />
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
            htmlFor='accountType'
          >
            Account Type
          </label>
          <select
            className="inputFields"
            onChange={(e) => setAccountType(e.target.value)}
            id="accountType"
            required
          >
            <option value="">Select one</option>
            <option value="recruiter">Recruiter</option>
            <option value="job_seeker">Job Seeker</option>
          </select>
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
          <br />
          <button>Submit</button>
          <p>Have an account? <NavLink to='/login'>Login</NavLink></p>
          <p className='errorMessage inputLabel'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default SignupPage