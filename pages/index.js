import React from 'react';
import Home from "./Home";

const Layout = ({ children }) => {
    return (
        <div>
            <Home />
            <main>{children}</main>
        </div>
    );
};

export default Layout;