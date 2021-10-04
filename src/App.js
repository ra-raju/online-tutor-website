import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotfoundPage/NotFound';
import Services from './Components/Services/Services';
import { SubmitForm } from './Components/SubmitForm/SubmitForm';

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
            <Footer />
          </Route>
          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/contact/submitted">
            <Header />
            <SubmitForm />
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
