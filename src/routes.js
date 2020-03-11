import React  from "react";
import { Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from "./components/Blog";
import Post from "./components/Blog/Post";

const routes = (
     <Layout>
          <Route exact path={'/'} component={() => <Home />} />
          <Route exact path={'/Blog'} component={() => <Blog />} />
          <Route path={'/Blog/:post'} component={({ match: { params }}) => <Post name={params.post} />} />
     </Layout>
);

export default routes