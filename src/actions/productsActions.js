import { ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR } from '../types'

// Crear nuevos productos

export function createNewProductAction(product) {
  return (dispatch) => {
    // mandar a base de datos o ejecutar el reducer
    console.log(product)
    dispatch( addProduct() )
  }
}

// cuando se declara una función aquí, también hay que declararlo en los reducers.
const addProduct = () => ({
  type: ADD_PRODUCT
})
// esta es la función que se tiene que utilizar en el componente, así los datos del componente se pueden pasar a las acciones y después se ejecutan con dispatch.
//
// payload: el que modifica el state
// dispatch: es el que manda ejecutar las acciones
//