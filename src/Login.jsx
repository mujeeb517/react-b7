import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Login component
// Route configuration
// Capture email or password
// Send it to api
// save token

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [hasError, setError] = useState(false);

    const onLogin = () => {
        axios.post('https://fsa-api-b6.onrender.com/api/users/signin', user)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/products');
            })
            .catch((err) => {
                setError(true);
            });
    }

    const onEmailChange = (event) => {
        setUser({ ...user, email: event.target.value });
    }

    const onPwdChange = (event) => {
        setUser({ ...user, password: event.target.value });
    }

    return <div class="bg-gray-100 w-1/3 shadow-md rounded px-8 pt-2 pb-8 m-4">
        {hasError ?
            <div className="bg-red-400 p-2 rounded text-white">
                Wrong username or password
            </div> : null
        }
        <h1 class="m-4 text-2xl font-semibold underline">Login</h1>
        <div class="m-4">
            <input onChange={onEmailChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
        </div>
        <div class="m-4">
            <input onChange={onPwdChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password" placeholder="Password" />
        </div>
        <div class="m-4">
            <button onClick={onLogin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
        </div>
    </div>;
}

export default Login;
