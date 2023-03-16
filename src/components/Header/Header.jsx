import React, { useEffect, useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './header.css'

import { motion } from 'framer-motion'

import logo from "../../assets/images/eco-logo.png"
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row, } from "reactstrap";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import axios from 'axios';

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }

]

function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null)
  const profileActionRef = useRef(null)
  const navigate=useNavigate()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const currentUser = localStorage.getItem("token")



  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };


  const handleLogout = () => {
    alert('logout called')
    localStorage.removeItem('token');
    navigate('/login')
  };


  const toggleProfileAction = () => profileActionRef.current.classList.toggle("show__profileActions")



  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      //This pattern of registering an event listener in useEffect and unregistering it in the returned cleanup function is important to prevent memory leaks and ensure that the event listener is properly removed when the component is unmounted.
    };
  }, []);


  const headerClassName = isSticky ? 'sticky__header' : '';




  return (
    <header className={headerClassName}>
      <Container>
        <Row>
          <div className="nav_wrapper">

            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}  >{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav__icons">

              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className='cart__icon'>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className='profile'>
                <motion.img whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src={userIcon} alt="userAvatar" onClick={toggleProfileAction}
                />

                <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileAction}>
                  {
                    currentUser ? <Link to="login" onClick={handleLogout}> Logout</Link> : <div>
                      <Link to="/signup">Signup</Link><br />
                      <Link to="/login">login</Link>
                    </div>
                  }
                </div>

              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>

            </div>





          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header