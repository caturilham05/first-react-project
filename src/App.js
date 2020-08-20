import React from 'react';
import NavbarComp from './component/project/NavbarComp';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import HomePage from './component/project/HomePage';
import AboutPage from './component/project/AboutPage';
import ListComp from './component/project/ListComp';
import TambahComp from './component/project/TambahComp';
import EditComp from './component/project/EditComp';
import KrsComp from './component/project/KrsComp';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
          {/* Routing */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/mahasiswa" component={ListComp}/>
          <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
          <Route exact path="/krs-mahasiswa" component={KrsComp}/>
          <Route exact path="/mahasiswa/edit" component={EditComp}/>
        </Switch>
          {/* End Routing */}
    </BrowserRouter>
  );
}

export default App;
