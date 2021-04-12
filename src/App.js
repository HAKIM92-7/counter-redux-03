import './App.css';
import Counter from './components/Counter'
import {useSelector , useDispatch} from 'react-redux'
import {changeVisibility} from './redux/actions/actions'
function App() {

var display = useSelector (state => state.display)
const dispatch = useDispatch()
  return (
    <div className="App">
    <button   onClick={()=>dispatch(changeVisibility())}  >{display ? "Hide Counter" : "Show Counter"}</button>


{ display ?
  <Counter/> : ""
  
  
  }
    </div>
  );
}

export default App;
