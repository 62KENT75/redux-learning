import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/actions';

function SecondScreen() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="SecondScreen">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default SecondScreen
