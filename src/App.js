
import './App.css';
import Navbar from './components/nav_bar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
