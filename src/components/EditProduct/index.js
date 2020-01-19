import React from 'react'

const EditProduct = () => {
  return (
    <div>
      <form>
        <h1>Edit product</h1>
        <section>
          <label>Product name</label>
          <input
            type='text'
            placeholder='Product name'
            name='name'
          />
        </section>
        <section>
          <label>Product price</label>
          <input
            type='number'
            placeholder='Product price'
            name='price'
            min='0'
          />
        </section>
        <button>Save changes</button>
      </form>
    </div>
  )
}

export default EditProduct