import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type='text' placeholder='username' />
                <input required type='password' placeholder='password' />
                <input required type='email' placeholder='email' />
                <button className='link-button'>Login</button>
                {/* <p className='error'>There is an error</p> */}
                <span>Or<br /> Create A New Account <Link to='/Register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login