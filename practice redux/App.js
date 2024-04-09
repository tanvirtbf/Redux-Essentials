import React from 'react'
import './App.css'
import Product from './components/Product'
import { useSelector } from 'react-redux'

export default function App() {
  const productsList = useSelector((state) => state.products)
  return (
    <div className='products-container'>
      {
        productsList.map(({id, title, rating, price, image}) => <Product key={id} title={title} rating={rating} price={price} imageUrl={image}/>)
      }
    </div>
  )
}
