import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products"

import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";


import { Container, Col, Row } from 'reactstrap';

import heroImg from "../assets/images/hero-img.png";
import counterImage from "../assets/images/counter-timer-img.png";



import Services from "../services/Services";


import "../style/home.css";

function Home() {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSelesProducts, setBestSelesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  // const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularCategoryProducts, setpopularCategoryProducts] = useState([]);


  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair')
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa')
    const filteredMobileProducts=products.filter(item => item.category !== 'sofa').filter(item => item.category !== 'chair').filter(item => item.category !== 'watch')
    // const filteredWirelessProducts=products.filter(item => item.category === 'wireless')
    const filteredPopularCategory = products.filter(item => item.category === 'watch')

    setTrendingProducts(filteredTrendingProducts)
    setBestSelesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    // setWirelessProducts(filteredWirelessProducts)
    setpopularCategoryProducts(filteredPopularCategory)
  }, []);


  const year = new Date().getFullYear();
  return (
    <Helmet title={'Home'}>

      <section className="hero__section">
        <Container>
          <Row>

            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Interior More Minimalistics & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci explicabo  temporibus!Voluptatum adipisci explicabo corporis!  </p>

                <motion.button whileHover={{ scale: 1.2 }} className='shop__btn'><Link to='shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title mb-3'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />

          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title mb-3'>Best Sales Products</h2>
            </Col>
            <ProductsList data={bestSelesProducts} />

          </Row>
        </Container>
      </section>

      <section className="timer__count ">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3' >Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.1 }} className="buy__btn store__btn p-2 mt-4">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={counterImage} alt="" />
            </Col>

          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title mb-3'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title mb-3'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularCategoryProducts}/>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home 