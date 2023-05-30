import React from 'react';
import Header from '../src/Header';
import Home from "./Home";

const Layout = ({ children }) => {
    return (
        <div>
            <Home />
            {/*<Header />*/}
            <main>{children}</main>
        </div>
    );
};

export default Layout;