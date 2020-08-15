import React from 'react';
import NavbarComp from './component/project/NavbarComp';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import HomePage from './component/project/HomePage';
import AboutPage from './component/project/AboutPage';
// import DetailComp from './component/project/DetailComp';
import ListComp from './component/project/ListComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
          {/* Routing */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/mahasiswa" component={ListComp}/>
          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>
          {/* End Routing */}
    </BrowserRouter>
  );
}

export default App;
