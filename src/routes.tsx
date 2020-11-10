import React  from "react";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

const routes = (
     <div>
        <Route exact path={'/'} component={() => <Portfolio />} />
        <Route exact path={'/Blog'} component={() => <p>Blog</p>} />
     </div>
);

export default routes;
