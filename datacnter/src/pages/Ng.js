import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../components/style/ng.css'

function Ng() {
    const [con, setCon] = useState(false);
    const navigate = useNavigate();

    const Uzanbazar = () => {
        navigate('/uzanbazar');
    };

    const Paltanbazar = () => {
        navigate('/paltanbazar');
    };

    const Medical = () => {
        navigate('/Medical');
    };

    const Jail = () => {
        navigate('/Jail');
    };

    const Kalapahar = () => {
        navigate('/kalapahar');
    };

    const Jalukbari = () => {
        navigate('/jalukbari');
    };

    const Neharu_Stadium_data = () => {
        navigate('/neharustadium');
    };

    const Bamunimaidan = () => {
        navigate('/bamunimaidan');
    };

    useEffect(() => {
        const fetchMedicalData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/medical/11KV_KACHARI_BASTI');
                if (response.ok) {
                    const data = await response.json();
                    // Check if data is 0 (place not found)
                    if (data === 0) {
                        setCon(false); // Place not found, set con to false
                    } else {
                        setCon(true); // Place found, set con to true
                    }
                } else {
                    setCon(false); // Place not found, set con to false
                    console.error('Failed to fetch medical data');
                }
            } catch (error) {
                console.error('Error fetching medical data:', error);
            }
        };

        fetchMedicalData(); // Call fetch function immediately
        const cheakinterval=setInterval(fetchMedicalData,10000);

        return () => clearInterval(cheakinterval); // Cleanup interval on component unmount

    }, []); // Empty dependency array means this effect runs only once

    useEffect(() => {
        console.log('conconconcon medical:', con); // Log whenever con changes
    }, [con]); // Dependency array ensures this effect runs whenever con changes

    return (
        <>
            <div className="container">
                <div className="c1" id="z7" >
                    <button  onClick={Neharu_Stadium_data}> Neharu Stadium</button>
                </div>
                <div className="c1" id="z2">
                    <button onClick={Jail}>Jail</button>
                </div>
                <div className="c1" id="z1">
                    <button onClick={Uzanbazar}>Uzanbazar</button>
                </div>
                <div className="c1" id="z3" >
                    <button style={{backgroundColor:con?'green':'red'}} onClick={Medical}>Medical</button>
                </div>
                <div className="c1" id="z4">
                    <button onClick={Paltanbazar}>Paltanbazar</button>
                </div>
                <div className="c1" id="z5">
                    <button onClick={Jalukbari}>Jalukbari</button>
                </div>
                <div className="c1" id="z5">
                    <button onClick={Kalapahar}>Kalapahar</button>
                </div>
                <div className="c1" id="z5">
                    <button onClick={Bamunimaidan}>Bamunimaidan</button>
                </div>
            </div>
        </>
    );
}

export default Ng;
