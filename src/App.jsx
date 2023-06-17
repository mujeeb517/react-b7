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
// custom styles
import Header from './Header';
import Footer from './Footer';
import Name from './Name';
import Result from './Result';
import ProductList from './ProductList';
import Counter from './Counter';
import UserList from './users/UserList';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';

function App() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/users" Component={UserList} />
            <Route path="/products" Component={ProductList} />
            {/* <Route path="*" Component={Home} /> */}
            <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
    </BrowserRouter>
}

export default App;