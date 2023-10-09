import './App.css';
import './index.css';
import Home from './Home'
import Info from './Info'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tietoa' element={<Info />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
