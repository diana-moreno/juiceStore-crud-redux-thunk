import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProductAction } from '../../actions/products-actions'
import { showAlert, hideAlertAction } from '../../actions/alert-actions'

const Newproduct = ({ history }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const dispatch = useDispatch()

  // access the store state
  const loading = useSelector(state => state.products.loading) // true o false
  const error = useSelector(state => state.products.error) // true o false
  const alert = useSelector(state => state.alert.alert)

  // se utiliza dispatch para ejecutar las acciones
  const addProduct = product => dispatch(createNewProductAction(product))

  const submitNewProduct = async event => {
    event.preventDefault()
    // validate form
    if(name.trim() === '' || price <= 0) {
      const alert = {
        msg: 'All fields are required.'
      }
      dispatch(showAlert(alert))
      return
    }
    // if no errors
    dispatch(hideAlertAction())
    // create new product
    await addProduct({
      name,
      price
    })
    // redirect to main component
    history.push('/')
  }

  return (
    <div>
      <h1>Add new product</h1>
      { alert ? <p>{alert.msg}</p> : null }
      <form onSubmit={submitNewProduct} >
        <section>
          <label>Product name</label>
          <input
            type='text'
            placeholder='Product name'
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </section>
        <section>
          <label>Product price</label>
          <input
            type='number'
            name='price'
            min='0'
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />
        </section>
        <button>Add new</button>
      </form>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Ups! An error ocurred.</p> : null }
    </div>
  )
}

export default Newproduct