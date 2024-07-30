// src/components/Layout.js
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.tsx';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbaruser from '../components/Navbar/Navbaruser.tsx';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Layoutuser = ({ children }) => {
    const navigate = useNavigate();
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/user/user", {
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    credentials: 'include'
                });

                if (!response.ok) {
                   
                    navigate("/login")
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the async function

    }, []);

    return (
        <div>
            <Navbaruser />
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

export default Layoutuser;
