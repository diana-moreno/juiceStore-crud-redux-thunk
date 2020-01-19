import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { retrieveProductsAction } from '../../actions/productsActions'
// useSelector es para recoger el state
import Product from '../Product'

const Products = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)

  useEffect(() => {
    (() => {
      dispatch(retrieveProductsAction())
    })()
  }, [])


  return (
    <div>
      <h1>Products</h1>
      { error ? <p>An error ocurred</p> : null }
      { loading ? <p>Loading...</p> : null }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.length === 0 ? 'No products yet.' : (
            products.map(product =>
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Products
