import './App.css';
import Layout from './components/open_modal';
import { Route, Switch } from "react-router-dom";
import TransactionDetail from './components/create_project/transaction_detail';
import OpenModal from './components/open_modal';

function App() {
  return (
    <div className="App">
      <main className="App-container bg-gradient-to-tr from-white to-gray-300">
        <Switch>
          <Route exact path="/pay" component={TransactionDetail} />
          <Route exact path="/" component={OpenModal} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
