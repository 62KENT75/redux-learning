const initialState = {
  customers: []
};
const ADD_CUSTOMERS = "ADD_CUSTOMERS"
const DELETE_CUSTOMERS = "DELETE_CUSTOMERS"

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, action.payload]
      }
    case DELETE_CUSTOMERS:
    return {
      ...state,
      customers: state.customers.filter(customer => customer.id !== action.payload)
    }
    default:
      return state
  }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMERS, payload})
export const deleteCustomerAction = (payload) => ({type: ADD_CUSTOMERS, payload})
