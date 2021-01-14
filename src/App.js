import './App.css';
import Layout from './components/layout';
import { Route, Switch } from "react-router-dom";
import TransactionDetail from './components/create_project/transaction_detail';

function App() {
  return (
    <div className="App">
      <main className="App-container bg-gradient-to-tr from-white to-gray-300">
        <Switch>
          <Route exact path="/pay" component={TransactionDetail} />
          <Route exact path="/" component={Layout} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
