import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import {Helmet} from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
            <Header/>
            <main className="container">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;