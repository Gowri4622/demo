import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomeComponent from './Component/Routes/HomeComponent/HomeComponent';
import AboutUsComponent from './Component/Routes/AboutUsComponent/AboutUsComponent';
import ContactUsComponent from './Component/Routes/ContactUsComponent/ContactUsComponent';
import CounterComponent from './Component/Routes/CounterComponent/CounterComponent';
import SubscriptionComponent from './Component/Routes/SubscriptionComponent/SubscriptionComponent';
function App() {
  return (
    <Router>
    <div class="App">
      <ul class="MyUl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/subscribe">Subcribe</Link>
        </li>
      </ul>
     
      <Routes>
        <Route exact path="/" element={<HomeComponent/>}></Route>
        <Route exact path="/about" element={<AboutUsComponent/>}></Route>
        <Route exact path="/contact" element={<ContactUsComponent/>}></Route>
        <Route exact path="/counter" element={<CounterComponent/>}></Route>
        <Route exact path="/subscribe" element={<SubscriptionComponent/>}></Route>
      </Routes>
      </div>
      </Router> 
    
  );
}

export default App;
