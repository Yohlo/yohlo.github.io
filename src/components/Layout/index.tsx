import React, { ReactNode } from 'react';
import Header from '../Header';

type Props = {
    children: ReactNode
}

/**
 * Main Layout of the site. Each page will use this layout.
 * `props.children` will be one of the routes found in `routes.tsx`
 * @param props : see Props definition above
 */
const Layout = (props: Props) => (
    <div>
        {/*<Header />*/}
        {props.children}
    </div>
)

export default Layout;