import React from 'react';

/**
 * Main Layout of the site. Each page will use this layout.
 * `props.children` will be one of the routes found in `routes.js`
 * @param props : { children }
 */
const Layout = (props) => (
    <div>
        {props.children}
    </div>
)

export default Layout;