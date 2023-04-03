import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';

import './Header.css';
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
    // https://static.vecteezy.com/system/resources/thumbnails/000/626/825/small/031218-28.jpg

    const { user, setUserSession } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        setUserSession({});
        localStorage.clear();
        navigate('/');
    }

    return (
        <header>
            <NavLink className="header" to="/" >
                <div className="img-holder">
                    <h1>Auction<span>House</span></h1>
                    <div className="image">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/626/825/small/031218-28.jpg" alt="hammer" />
                    </div>
                </div>
            </NavLink>
            {user.username && (
                <h4 className="greetings"><span>Welcome:</span> {user.username}</h4>
            )}
            <nav>
                <ul className="header-list">
                    <li className="header-list-item">
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/search" >Search</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/catalog" >Browse</NavLink>
                    </li>
                    {!user.username && (
                        <>
                            <li className="header-list-item">
                                <NavLink to="/login" >Login</NavLink>
                            </li>
                            <li className="header-list-item">
                                <NavLink to="/register" >Register</NavLink>
                            </li>
                        </>
                    )}

                    {user.username && (
                        <>
                            <li className="header-list-item">
                                <NavLink to="/my-auctions" >My-Auctions</NavLink>
                            </li>
                            <li className="header-list-item">
                                <NavLink to="/create" >Add-Auction</NavLink>
                            </li>
                            <li className="header-list-item">
                                <Link className="redLink" to="/" onClick={onLogout} >Log-Out</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}