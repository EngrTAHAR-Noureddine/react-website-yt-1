
import './App.css';
import Navbar from './components/nav_bar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/sign_up';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
