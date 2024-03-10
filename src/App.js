import './App.css';
import Main from './components/main';
import Order from './components/rightOrder';
import Pair from './components/correctPair';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router basename='/memory-games'>
        <Routes>
          <Route exact path='/memory-games' element={<Main/>}></Route>
          <Route exact path='/rightO' element={<Order/>}></Route>
          <Route exact path='/correctP' element={<Pair/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;