import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>

        <div className="options">
            <div className="option">
                <Link to='/shop'>
                    SHOP
                </Link>
            </div>
            <div className="option">
                <Link to='/shop'>
                    CONTACT
                </Link>
            </div>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> :
                <Link className='option' to='/signin'> SIGN IN </Link>
            }
        </div>
    </div>
)

export default Header;