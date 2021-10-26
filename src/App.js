import './App.css';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Product from './component/product/Product';
import Loginpage from '../src/component/login/Loginpage';
import Admin from './component/Admin';
// import MyContext from './component/MyContext';

function App() {
  return (
    <div className="App">
      {/* <MyContext.Provider> */}
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={Loginpage} /> 
          <Route exact path="/Admin" component={Admin}/>
          <Route path="/product" component={Product}/>
        </Switch>
      </BrowserRouter>
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
