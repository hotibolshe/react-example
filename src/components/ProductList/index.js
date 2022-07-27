import React from 'react'
import './index.css'

const products = [
  {
    name: 'Bread',
    cost: '1.00$'
  },
  {
    name: 'Milk',
    cost: '2.00$'
  },
  {
    name: 'Sugar',
    cost: 'N/A'
  },
  {
    name: 'Super Bread',
    cost: '10.00$'
  },
  {
    name: 'Croissant',
    cost: '21.00$'
  },
  {
    name: 'Coffee',
    cost: '5.50$'
  },
  {
    name: 'Bread',
    cost: '1.00$'
  },
  {
    name: 'Milk',
    cost: '2.00$'
  },
  {
    name: 'Sugar',
    cost: 'N/A'
  },
  {
    name: 'Super Bread',
    cost: '10.00$'
  },
  {
    name: 'Croissant',
    cost: '21.00$'
  },
  {
    name: 'Coffee',
    cost: '5.50$'
  },
  {
    name: 'Bread',
    cost: '1.00$'
  },
  {
    name: 'Milk',
    cost: '2.00$'
  },
  {
    name: 'Sugar',
    cost: 'N/A'
  },
  {
    name: 'Super Bread',
    cost: '10.00$'
  },
  {
    name: 'Croissant',
    cost: '21.00$'
  },
  {
    name: 'Coffee',
    cost: '5.50$'
  },
]

const ProductList = () => {

  return (
    <div className='product-list'>
      {
        products.map(product => (
          <div
            key={product.name}
            className="product-item"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5cfdCVl3SbtZ3KyKgJJdL4aQu9Nw6haxHw&usqp=CAU" />
            <span className="product-item__name">{product.name}</span>
            <span className="product-item__cost">{product.cost}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList
