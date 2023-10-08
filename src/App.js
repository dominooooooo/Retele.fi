import './App.css';
import './index.css';
import Home from './Home'
import Info from './Info'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tietoa' element={<Info />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
