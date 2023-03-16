import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";

import '../style/product-details.css'


function ProductDetails() {

  const { id } = useParams()
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, rating, price, avgRating, review, description, shortDesc } = product

  return (
    <Helmet>
      <CommonSection />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-half-line"></i> </span>
                  </div>
                  <p>(<span>{avgRating}</span> rating)</p>
                </div>
                
                <span className='product__price'>${price}</span>

                <p className='mt-3'>{shortDesc}</p>

                <motion.button whileTap={{scale:1.1}} className="buy__btn mt-4">Add to Cart</motion.button>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails