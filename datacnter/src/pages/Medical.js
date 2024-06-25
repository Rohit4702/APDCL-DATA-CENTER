import React from 'react';
import Kachari_Basti from '../components/medical_MFT/Kachari_Basti';
import New_gs from '../components/medical_MFT/New_gs';
import Medical_eleven from '../components/medical_MFT/Medical_eleven';
import Old_gs from '../components/medical_MFT/Old_gs';
import Rupnagar from '../components/medical_MFT/Rupnagar';
import KV_TV from '../components/medical_MFT/KV_TV';
import Kahilipara from '../components/medical_MFT/Kahilipara';
import Ulubari from '../components/medical_MFT/Ulubari';

function Medical() {
    return (
        <div style={{backgroundColor:'black',color:'wheat'}}>
            <h3>Medical</h3>
          
          
          
          
          
          
          

            <div>
                {/* <div ></div> */}
                <New_gs />
            </div>
            <br />
            <div>
                {/* <div></div> */}
                <Kachari_Basti />
            </div>
            <br />

            <div>
                {/* <div></div> */}
                <Medical_eleven />
            </div>

            <br />


            <div>
                {/* <div>\</div> */}
                <Old_gs />
            </div>
            <br />

            <div>
             
                <Rupnagar />
            </div>
            <br />

            <div>
                {/* <div>11KV_TV</div> */}
                <KV_TV />
            </div>
            <br />

            <div>
                {/* <div>33KV_KAHILIPARA</div> */}
                <Kahilipara />
            </div>
            <br />

            <div>
                {/* <div>33KV_ULUBARI</div> */}
                <Ulubari />
            </div>








        </div>

    );
}
export default Medical;