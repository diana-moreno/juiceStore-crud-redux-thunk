import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProductAction } from '../../actions/products-actions'
import { showAlert, hideAlertAction } from '../../actions/alert-actions'
import './index.css'

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

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h2 className='table__title'>New product</h2>
      <form
        className='form'
        onSubmit={submitNewProduct} >
        <section className='form__section'>
          <label>Product name</label>
          <input
            type='text'
            placeholder='Product name'
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Product price</label>
          <input
            type='number'
            name='price'
            min='0'
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />
        </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
           >Cancel</button>
          <button className='button button--confirm'>Confirm</button>
        </div>
        { alert ? <p className='alert-message'>{alert.msg}</p> : null }
      </form>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Ups! An error ocurred.</p> : null }
    </div>
  )
}

export default Newproduct