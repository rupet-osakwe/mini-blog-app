import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const axiosInstance = axios.create({ baseURL: process.env.BASE_URL });


const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log('helloworld');
            const res = await axiosInstance.post('/register', { inputs });
            console.log(res);

        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    }


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
        // console.log(inputs);
    }



    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type='text' placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
                <input required type='password' placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
                <input required type='email' placeholder='email' name='email' value={inputs.email} onChange={handleChange} />
                <button className='link-button' onClick={handleSubmit}>Register</button>
                {/* <p className='error'>There is an error</p> */}
                <span>Or<br /> Have An Account Already?  <Link to='/Login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register