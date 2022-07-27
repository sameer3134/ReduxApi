import React from 'react'
import{ useSelector} from 'react-redux'

const ProductsComponents = () => {
  const products= (useSelector)((state)=> state.ProductReducer.products)
 const renderlist= products.map((products)=>{
  const {id, title, price, category,image} = products
  return(
    
    <div className='four coloumn wide' key={id}>
      <div className='ui links cards'>
        <div className='card'>
          <div className='image'> <img src={image} alt="allen" /></div>
          <div className='content'>
            <div className='header'>{title}</div>
            <div className='meta price'>$ {price}</div>
            <div className='meta'>{category}</div>
          </div>
        </div>
      </div>
    </div>
  )
 })
  return (
    <div>{renderlist}</div>
  )
}

export default ProductsComponents