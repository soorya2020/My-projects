import React from 'react'


import "../../style/product-card.css";
import { motion } from 'framer-motion'

import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slices/cardSlice";
import { toast } from 'react-toastify';


function ProductsCard({ item }) {
  
    const dispatch = useDispatch()


    const addToCart = () => {
        dispatch(CartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }))
        
        toast.success('Successfully added!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
         
            });

    }

    return (

        <Col lg='3' md='4' className='mb-2' >

            <div className='product__item'>

                <div className="product__img">
                    <motion.img whileHover={{ scale: 1.1 }} src={item?.imgUrl} alt="" />
                </div>

                <div className='p-2 product__info'>
                    <h3 className="product__name"><Link to={`/shop/${item.id}`} >{item?.productName}</Link></h3>
                    <span className='text-center d-block'>{item.category}</span>
                </div>

                <div className="product__card-bottom d-flex align-items-center justify-content-between p-4">
                    <span className="price">${item?.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart} >
                        <i class="ri-add-fill"></i>
                    </motion.span>
    
                </div>

            </div>

        </Col>

    )
}

export default ProductsCard