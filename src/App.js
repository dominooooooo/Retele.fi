import './App.css';
import './index.css';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
