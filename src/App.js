import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from './store/actions';
import { decrement } from './store/actions';
import { addCustomerAction, deleteCustomerAction } from './store/customersReducer';
import { fetchCustomers } from './asyncAction/customers';
// import { useState } from 'react';

function App() {
  const count = useSelector(state => state.count.count)
  const customers = useSelector(state => state.customers.customers)
  const dispatch = useDispatch()
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id))
  }
  // const [screenName, setScreenName] = useState(0)
  return (
    <div className="App">
      <div style={{fontSize: "3rem", marginBottom: 10}}>Count: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <button onClick={() => addCustomer(prompt())}>Add client</button>
        <button onClick={() => dispatch(decrement())}>Delete client</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add clients from base</button>
        {/* <button onClick={() => setScreenName(1)}>Toggle</button> */}
      </div>
      {customers.length > 0 ?
      <div>
        {customers.map(customer =>
          <div onClick={() => deleteCustomer(customer)} style={{fontSize: "25px", border: "solid 1px black", padding: "10px", marginTop: 5}}>{customer.name}</div>
        )}
      </div>
      :
      <div style={{fontSize: "30px", marginTop: "20px"}}>
        Clients are not defined!
      </div>}
    </div>
  );

}

export default App;
