import React from 'react';
import {children} from 'react';

const Layout = ({children}) => {

    return(
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;
