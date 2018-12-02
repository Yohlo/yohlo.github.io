import React  from "react";
import { Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Terminal from './components/Terminal';


// only one route currently. will be expanded upon

const routes = (
    <Layout>
          <Route exact path={'/'} component={() => <Home />} />
          <Route exact path={'/Terminal'} component={() => <Terminal />} />
     </Layout>
);

export default routes