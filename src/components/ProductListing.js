import React from 'react'
import{  useDispatch} from 'react-redux'
import ProductsComponents from './ProductsComponents'
import { useEffect} from "react";
import axios from 'axios';
import { setProducts} from '../actions/index'


const ProductListing = () => {
   const dispatch = useDispatch()
  
    const getrecipes =async()=>{
      const response =await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    }
    useEffect(() => {
        getrecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]); 
  return (
    <div className='ui grid container'>
        <ProductsComponents />
    </div>
  )
}

export default ProductListing