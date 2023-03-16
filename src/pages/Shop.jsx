import React, { useState } from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../style/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

function Shop() {

  const [productsData, setProductsData] = useState(products);



  const handleFilter = (e) => {

    let filterValue = e.target.value


    if (filterValue === 'sofa') {
      let filteredProducts = products.filter((item) => item.category === 'sofa')
      setProductsData(filteredProducts)
    }
    if (filterValue === 'mobile') {
      let filteredProducts = products.filter((item) => item.category === 'mobile')
      setProductsData(filteredProducts)
    }
    if (filterValue === 'wireless') {
      let filteredProducts = products.filter((item) => item.category === 'wireless')
      setProductsData(filteredProducts)
    }
    if (filterValue === 'chair') {
      let filteredProducts = products.filter((item) => item.category === 'chair')
      setProductsData(filteredProducts)
    }

  }

  const handlSearch=(e)=>{
    const searchTerm=e.target.value
    const searchedProducts= products.filter(item=>item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setProductsData(searchedProducts)
  }


  return (
    <Helmet title="shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg-3 md-3>
              <div className="filter__widget">
                <select onClick={handleFilter} >
                  <option >Filter by Category</option>
                  <option value="sofa">sofa</option>
                  <option value="mobile">mobile</option>
                  <option value="chair">chair</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </Col>
            <Col lg-3 md-3>
              <div className="filter__widget">
                <select >
                  <option >Sort by</option>
                  <option value="accending">Accending </option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg-6 md-6>
              <div className="search__box">
                <input type="text" placeholder='Search' onKeyUp={handlSearch} />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData?.length === 0 ? (<h1 className='text-center'>no products found !</h1>) : (<ProductsList data={productsData} />)
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop