import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from "axios";









//https://github.com/lukumonak/data_cntr

function Ulubari() {
    let { placename } = useParams();
    const baseurl1 = 'http://localhost:4000/api/medical/33KV_ULUBARI'
    const baseurl2 = 'http://localhost:4000/api/fidder/33KV_ULUBARI'
    const [dta, setdta] = useState([])
    const [fdta, setfdta] = useState([])
    const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
    const [Datafetch, setDatafetch] = useState(false)
    const [dataFetchStatus, setDataFetchStatus] = useState(false);




    useEffect(() => {

        const fatchdata = async () => {


            const savedDta = JSON.parse(localStorage.getItem('dta'));
            const savedFdta = JSON.parse(localStorage.getItem('fdta'));
            // if (savedDta) setdta(savedDta);
            // if (savedFdta) setfdta(savedFdta);
            
            try {
                // if (savedDta) setdta(savedDta);
                const response = await axios.get(baseurl1, {
                }).then((response) => {

                    const dataArray1 = Array.isArray(response.data) ? response.data : [response.data];
                    setdta(dataArray1)
                    localStorage.setItem('dta', JSON.stringify(dataArray1));

                    const fetchedTime = dataArray1[0].time; // Assuming time is available in dataArray1
                    setLastUpdateTime(prevTime => {
                        const hasDataChanged = prevTime !== fetchedTime;
                        setDataFetchStatus(hasDataChanged);
                        return fetchedTime; // Update lastUpdateTime with fetched time
                    });


                })
            } catch (err) {
                console.error(err);
                setDatafetch(false)

                // if (savedDta) setdta(savedDta);

                if (err.response && err.response.status === 404) {
                    setDataFetchStatus(false);
                } else {
                    console.error(err);
                }

            }
            // if (savedDta) setdta(savedDta);

            try {
                const response = await axios.get(baseurl2, {
                }).then((response) => {
                    const dataArray = Array.isArray(response.data) ? response.data : [response.data];
                    setfdta(dataArray)
                    localStorage.setItem('fdta', JSON.stringify(dataArray));
                })
            } catch (err) {
                console.error(err);

            }
            // if (savedDta) setdta(savedDta);



        };
        fatchdata();

        const intervalid = setInterval(fatchdata, 10000)  //for intervel of 10s

        const clearlocalStorage = setInterval(() => {
            localStorage.removeItem('dta');
            localStorage.removeItem('fdta');
        }, 3600000); // Clear local storage every hour


        //    let dta=Array.dta
        console.log(dta)

        return () => {
            clearInterval(intervalid)
            clearInterval(clearlocalStorage);

        }

    }, [])











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
                <tbody >
                    {
                        Array.isArray(dta) && dta.map((item, index) => (
                            <>
                                {console.log(item)}


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
                        ))
                    }
                </tbody>
            </Table>

            {
                Array.isArray(fdta) && fdta.map((item, index) => (
                    <div className="feeder" id="fd1" style={{ backgroundColor: item.status === 2 ? 'red' : 'green', border: "2px solid black", height: "30px", width: "30px" }}></div>

                ))
            }

        </>
    );
}

export default Ulubari;
