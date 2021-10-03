import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NotFound from './Components/NotfoundPage/NotFound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
