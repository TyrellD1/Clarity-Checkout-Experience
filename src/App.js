import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './Payment';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* I made the checkout path / for simplicity sake, in a real app this would have a
          different path */}
          <Route path="/" exact component={Checkout} />
          <Route path="/payment" component={Payment} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
