import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../../components/style/table.css'



function Rupnagar() {
    let { placename } = useParams();
    const baseurl1 = 'http://localhost:4000/api/medical/11KV_RUPNAGAR';
    const baseurl2 = 'http://localhost:4000/api/fidder/11KV_RUPNAGAR';
    const [dta, setdta] = useState([]);
    const [fdta, setfdta] = useState([]);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);
    const [dataFetchStatus, setDataFetchStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const savedDta = JSON.parse(localStorage.getItem('dta'));
            const savedFdta = JSON.parse(localStorage.getItem('fdta'));
            if (savedDta) setdta(savedDta);
            if (savedFdta) setfdta(savedFdta);

            try {
                const [response1, response2] = await Promise.all([
                    axios.get(baseurl1),
                    axios.get(baseurl2)
                ]);

                const dataArray1 = Array.isArray(response1.data) ? response1.data : [response1.data];
                const dataArray2 = Array.isArray(response2.data) ? response2.data : [response2.data];

                setdta(dataArray1);
                setfdta(dataArray2);
                localStorage.setItem('dta', JSON.stringify(dataArray1));
                localStorage.setItem('fdta', JSON.stringify(dataArray2));

                const fetchedTime = dataArray1[0].time; // Assuming time is available in dataArray1

                setLastUpdateTime(prevTime => {
                    const hasDataChanged = prevTime !== fetchedTime;
                    setDataFetchStatus(hasDataChanged);
                    return fetchedTime; // Update lastUpdateTime with fetched time
                });
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setDataFetchStatus(false);
                } else {
                    console.error(err);
                }
            }
        };

        fetchData(); // Initial fetch

        const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds

        const clearlocalStorage = setInterval(() => {
            localStorage.removeItem('dta');
            localStorage.removeItem('fdta');
        }, 3600000); // Clear local storage every hour

        return () => {
            clearInterval(intervalId);
            clearInterval(clearlocalStorage);
        }; // Cleanup intervals on component unmount
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className='table_feeder'>


            <div className="line_border">
                <div className="line"></div>
            </div>
            <div className='feeder_indicator'>
                {fdta.map((item, index) => (
                    <div key={index} className="feeder" id="fd1" style={{ backgroundColor: item.status === 2 ? 'red' : 'green', border: "2px solid black", height: "30px", width: "30px" }}></div>
                ))}
            </div>

            
            <div className="line_border">
                <div className="line"></div>
                
            </div>
            <div className="name">11KV_RUPNAGAR</div>


            <Table striped bordered hover size="sm" style={{ margin: '0px' }}>
                <thead>
                    <tr>
                        <th><div style={{ borderRadius: "50%", height: "14px", width: '14px', background: dataFetchStatus ? "green" : "red" }}></div></th>
                        <th><b>R-Y</b></th>
                        <th><b>Y-B</b></th>
                        <th><b>B-R</b></th>
                    </tr>
                </thead>
                <tbody>
                    {dta.map((item, index) => (
                        <>
                            <tr>
                                <td style={{ color: 'orange' }}><b>VOL</b></td>
                                <td>{item.VOL_R_Y}</td>
                                <td>{item.VOL_Y_B}</td>
                                <td>{item.VOL_B_R}</td>
                            </tr>
                            <tr>
                                <td style={{ color: 'orange' }}><b>AMP</b></td>
                                <td>{item.AMP_L1}</td>
                                <td>{item.AMP_L2}</td>
                                <td>{item.AMP_L3}</td>
                            </tr>
                            <tr>
                                <td style={{ color: 'orange' }}><b>MW</b></td>
                                <td>{item.MW}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td style={{ color: 'orange' }}><b>PF</b></td>
                                <td>{item.PF}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td style={{ color: 'orange' }}><b>Free</b></td>
                                <td>{item.FREQUENCY}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>










        </div>
    );
}

export default Rupnagar;
 
