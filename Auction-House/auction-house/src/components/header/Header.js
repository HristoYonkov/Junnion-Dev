import { NavLink, useNavigate } from "react-router-dom";
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
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/626/825/small/031218-28.jpg" alt="hammer" />
                </div>
            </NavLink>
            <nav>
                <ul className="header-list">
                    <li className="header-list-item">
                        <NavLink to="/" >HOME</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/catalog" >CATALOG</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/login" >LOGIN</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/register" >REGISTER</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/" onClick={onLogout} >LOG-OUT</NavLink>
                    </li>
                    <li className="header-list-item">
                        <NavLink to="/create" >CREATE</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}