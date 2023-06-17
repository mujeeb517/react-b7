// pascal casing
// inline styles
// external styles
// SPA: single page app
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return <nav className="flex bg-orange-500 text-white p-2">
        <div className="text-2xl flex mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="brand" style={{ fontWeight: 'bold' }}>
                E-Products
            </span>
        </div>
        <div>
            <ul className="flex">
                <li className="m-2 hover:underline">
                    <Link to="/">Home</Link>
                </li>
                <li className="m-2 hover:underline">
                    <Link to="/about">About</Link>
                </li>
                <li className="m-2 hover:underline">
                    <Link to="/products">Products</Link>
                </li>
                <li className="m-2 hover:underline">
                    <Link to="/users">Users</Link>
                </li>
                <li className="m-2 hover:underline">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Header;
