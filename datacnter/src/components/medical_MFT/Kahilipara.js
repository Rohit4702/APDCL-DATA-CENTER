
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Kahilipara() {
    let { placename } = useParams();
    const baseurl1 = 'http://localhost:4000/api/medical/33KV_KAHILIPARA';
    const baseurl2 = 'http://localhost:4000/api/fidder/33KV_KAHILIPARA';
    const [dta, setdta] = useState([]);
    const [fdta, setfdta] = useState([]);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);
    const [dataFetchStatus, setDataFetchStatus] = useState(false);
    const [con, setCon] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            const savedDta = JSON.parse(localStorage.getItem('dta'));
            const savedFdta = JSON.parse(localStorage.getItem('fdta'));
            if (savedDta) setdta(savedDta);
            if (savedFdta) setfdta(savedFdta);




            try {
                const [response1, response2] = await Promise.all([
                    axios.get(baseurl1),
                    axios.get(baseurl2),
                ]);

                const dataArray1 = Array.isArray(response1.data) ? response1.data : [response1.data];
                setdta(dataArray1);
                localStorage.setItem('dta', JSON.stringify(dataArray1));

                console.log(dta, 'Dataaaa')

                const dataArray2 = Array.isArray(response2.data) ? response2.data : [response2.data];
                setfdta(dataArray2);
                localStorage.setItem('fdta', JSON.stringify(dataArray2));


                const fetchedTime = dataArray1[0].time; // Assuming time is available in dataArray1
                setLastUpdateTime(prevTime => {



                    const hasDataChanged = prevTime !== fetchedTime;
                    setDataFetchStatus(hasDataChanged);
                    setCon(true)
                    console.log('dataFetchStatus', dataFetchStatus)
                    return fetchedTime; // Update lastUpdateTime with fetched time






                });
            } catch (err) {
                // console.error(err);
                if (err.response || err.response.status === 404) {
                    setCon(false)
                    setDataFetchStatus(false)
                    console.log('setCon',con)
                    console.log('setDataFetchStatus',setDataFetchStatus)

                }
            }
        };

        fetchData(); // Initial fetch

        const intervalId = setInterval(fetchData, 10000); // Fetch data every 10 seconds

        const clearlocalStorage = setInterval(() => {
            localStorage.removeItem('dta');
            localStorage.removeItem('fdta');

        }, 3600000);

        return () => {
            clearInterval(intervalId);
            clearInterval(clearlocalStorage);
        } // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures this effect runs only once on mount
    // console.log('conconconcon',con)





    useEffect(() => {

        console.log('conconconco9999999999n', con);
    }, [con]);

    return (
        <>
            <Table striped bordered hover size="sm" style={{ border: "2px solid black", margin: '20px' }}>
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
                                <td><b>VOL</b></td>
                                <td>{item.VOL_R_Y}</td>
                                <td>{item.VOL_Y_B}</td>
                                <td>{item.VOL_B_R}</td>
                            </tr>
                            <tr>
                                <td><b>AMP</b></td>
                                <td>{item.AMP_L1}</td>
                                <td>{item.AMP_L2}</td>
                                <td>{item.AMP_L3}</td>
                            </tr>
                            <tr>
                                <td><b>MW</b></td>
                                <td>{item.MW}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td><b>PF</b></td>
                                <td>{item.PF}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td><b>Free</b></td>
                                <td>{item.FREQUENCY}</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>

            <div>
                {fdta.map((item, index) => (
                    <div key={index} className="feeder" id="fd1" style={{ backgroundColor: item.status === 2 ? 'red' : 'green', border: "2px solid black", height: "30px", width: "30px" }}></div>
                ))}
            </div>
        </>
    );
}

export default Kahilipara;








