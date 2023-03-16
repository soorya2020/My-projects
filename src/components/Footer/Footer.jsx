import React from 'react'

import "./footer.css";
import logo from "../../assets/images/eco-logo.png"


import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {

  const year=new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>

          <Col lg='4'>
            <div className="logo footer__logo ">
              <img  src={logo} alt="logo" />
              <div>
                <h1 className='text-white'>Multimart</h1>
                <p className='text-white'>Since 1995</p>
              </div>
            </div>

            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum aspernatur
              molestiae
              in nobis quisquam velit nemo, pariatur ratione tempore quo aut.
            </p>
          </Col >

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'><Link to='/shop'>Mbile</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/cart'> Modern Sofa</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/login'>Modern Chair</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/'> Smart Watches</Link></ListGroupItem>

              </ListGroup>
            </div>
          </Col >

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'><Link to='/shop'><i class="ri-shopping-bag-3-line"></i>Shop</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/cart'> <i class="ri-shopping-cart-2-line"></i>  Cart</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/login'><i class="ri-login-box-line"></i>Login </Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to='/'><i class="ri-error-warning-line"></i>Privacy Policy</Link></ListGroupItem>

              </ListGroup>
            </div>
          </Col >


          <Col lg='2'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>

              <ListGroup>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123, Kattoor, Thrissur, Kerala</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+91-7561071554</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p >mystore@gmail.com</p>
                </ListGroupItem>

              </ListGroup>

            </div>
          </Col >
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} doveloped by Soorya with <i class="ri-heart-3-fill red__heart"></i> all rights reserved</p>
          </Col >
        </Row>
      </Container>
    </footer>
  )
}

export default Footer