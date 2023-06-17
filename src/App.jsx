// Components
// Component driven development
// fundamental building blocks

// Mobile
// components: speaker, mic, vibrator, screen, camera
// assembled 

// React app
// components: Header, Footer, Products, Cart, Singup, Singin
// assembled

// function or class
// UI or null
// modules private

import Header from './Header';
import Footer from './Footer';
import Name from './Name';
import Result from './Result';
import ProductList from './ProductList';
import Counter from './Counter';
import UserList from './users/UserList';
import Login from './Login';

function App() {
    return <div>
        {/* <Header /> */}
        <Login />
        {/* <UserList /> */}
        {/* <ProductList /> */}

        {/* <Result name="John" marks={60} />
        <Result name="Joseph" marks={40} /> */}


        {/* <Name personName="John" age={20} />
        <Name personName="Joseph" age={22} /> */}
        {/* <h1>Hello World</h1>
        <h2>Hello React</h2>
        <img width="400" height="300" src="https://images.pexels.com/photos/4022107/pexels-photo-4022107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

        <input type="text" placeholder='Email' />

        <Footer /> */}
    </div>
}

export default App;