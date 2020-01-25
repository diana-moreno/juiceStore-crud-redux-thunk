import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'

// Show alert
const createAlert = alert => ({
  type: SHOW_ALERT,
  payload: alert
})

export function showAlert(alert) {
  return (dispatch) => {
    dispatch(createAlert(alert))
  }
}

// Hide alert
const hideAlert = () => ({
  type: HIDE_ALERT,
  payload: null
})

export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert())
  }
}
