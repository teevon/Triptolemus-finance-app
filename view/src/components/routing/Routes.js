import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Features from '../Features/Features';
// import Downloads from '../Downloads/Downloads';
import Faqs from '../Faqs/Faqs';
import Contact from '../../containers/Contact/Contact';
import Landing from '../Landing/Landing';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
// import ResetPassword from '../ResetPassword/ResetPassword';
// import Forgot from '../Forgot/Forgot';
const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/features' component={Features} />
        {/* <Route exact path='/downloads' component={Downloads} /> */}
        <Route exact path='/faqs' component={Faqs} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
