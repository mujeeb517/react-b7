import React from 'react';

class Login extends React.Component {

    onLogin = () => {
        alert('Login is successful');
    }

    render() {
        return <div class="bg-gray-100 w-1/3 shadow-md rounded px-8 pt-2 pb-8 m-4">
            <h1 class="m-4 text-2xl font-semibold underline">Login</h1>
            <div class="m-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
            </div>
            <div class="m-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password" placeholder="Password" />
            </div>
            <div class="m-4">
                <button onClick={this.onLogin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
            </div>
        </div>;
    }

}

export default Login;
