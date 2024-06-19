import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import axios from "axios";











function Kalapahar_data() {
    let { placename } = useParams();
    const baseurl = 'http://localhost:4000/api/kalapahar';
    const [dta, setdta] = useState([])

    useEffect(() => {

        const fatchdata=async()=>{
            try{
               const responde= await axios.get(baseurl, {
                }).then((response) => {
                    setdta(response.data)
                })
            }catch(err){
                console.error(err);
            }
        };
        fatchdata ();
       
    //    const intervalid=setInterval(fatchdata,10000)  for intervel of 10s
       
       
        console.log(dta)

        // return ()=>clearInterval(intervalid)

    }, [])


   
   
   






    return (
        <Table striped bordered hover size="sm"  style={{border:"2px solid black",  margin: '20px'}}>
            <thead>
                <tr>
                    <th><div style={{ borderRadius: "50%", height: "14px", width: '14px', background: "red" }}></div></th>
                    <th><b>R-Y</b></th>
                    <th><b>Y-B</b></th>
                    <th><b>B-R</b></th>


                </tr>
            </thead>
            <tbody >
                {
                    dta.map((item, index) => (
                        <>
                            {console.log(item)}


                            <tr>
                                <td><b>VOL</b></td>
                                <td>{item.VOL1}</td>
                                <td>{item.VOL2}</td>
                                <td>{item.VOL1}</td>
                            </tr>
                            <tr>
                                <td><b>AMP</b></td>
                                <td>{item.AMP1}</td>
                                <td>{item.AMP2}</td>
                                <td>{item.AMP3}</td>
                            </tr>
                            <tr>
                                <td><b>MW</b></td>
                                <td>{item.MW}</td>
                                <td>NIL</td>
                                <td>NIL</td>
                            </tr>
                            <tr>
                                <td><b>PF</b></td>
                                <td>{item.PF}</td>
                                <td>NIL</td>
                                <td>NIL</td>
                            </tr>
                            <tr>
                                <td><b>Free</b></td>
                                <td>{item.Fre}</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Kalapahar_data;

