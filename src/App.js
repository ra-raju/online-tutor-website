import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotfoundPage/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
            {/* <Footer /> */}
          </Route>
          <Route path="/services">
            <Header />
            <Services />
            {/* <Footer /> */}
          </Route>
          <Route path="/about">
            <Header />
            <About />
            {/* <Footer /> */}
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
