// src/components/Layout.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar.tsx';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    main: {
        flex: 1,
        
    }
};

export default Layout;
