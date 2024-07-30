import React, { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Allprodect from '../myprodect/Allprodect.tsx';

export default function Homemarcet() {
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/user/user", {
                    headers: {
                        'Content-Type': 'application/json'
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
           <Allprodect></Allprodect>
        </div>
    );
}