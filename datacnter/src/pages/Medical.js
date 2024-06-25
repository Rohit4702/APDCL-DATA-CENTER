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
        <div>
            <h3>Medical</h3>
          
          
          
          
          
          
          

            <div>
                <div >11KV_NEW_GS</div>
                <New_gs />
            </div>
            <div>
                <div>11KV_KACHARI_BASTI</div>
                <Kachari_Basti />
            </div>
            <div>
                <div>11KV_MEDICAL</div>
                <Medical_eleven />
            </div>

            <div>
                <div>11KV_OLD_GS</div>
                <Old_gs />
            </div>

            <div>
                <div>11KV_RUPNAGAR</div>
                <Rupnagar />
            </div>

            <div>
                <div>11KV_TV</div>
                <KV_TV />
            </div>

            <div>
                <div>33KV_KAHILIPARA</div>
                <Kahilipara />
            </div>

            <div>
                <div>33KV_ULUBARI</div>
                <Ulubari />
            </div>








        </div>

    );
}
export default Medical;