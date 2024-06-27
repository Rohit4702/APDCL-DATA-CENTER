import React from 'react';
import Kachari_Basti from '../components/medical_MFT/Kachari_Basti';
import New_gs from '../components/medical_MFT/New_gs';
import Medical_eleven from '../components/medical_MFT/Medical_eleven';
import Old_gs from '../components/medical_MFT/Old_gs';
import Rupnagar from '../components/medical_MFT/Rupnagar';
import KV_TV from '../components/medical_MFT/KV_TV';
import Kahilipara from '../components/medical_MFT/Kahilipara';
import Ulubari from '../components/medical_MFT/Ulubari';
import '../components/style/table.css'
function Medical() {
    return (
        <div style={{backgroundColor:'black',color:'wheat'}}>
            <div class="head">
            <h5 class="sld">SINGLE LINE DIAGRAM </h5>
            <h3 class="med">33/11 KV MEDICAL</h3>
            </div>

            <div class= "hr_line"></div>
            <h6>33 KV INCOMER BUS</h6>
            
            <div class ="container_vline">
                <div class="vertical_line"></div>
                <div class ="spacer"></div>
                <div class="vertical_line2"></div>
            </div>

            <div class="cont_ulubari">
                <div class="tab_ulubari">
                    
                    <Ulubari />
                    
                </div>

                <div class="tab_kahilipara">
                    
                    <Kahilipara />
                    
                </div>

            </div>
            <div class="br"> 
                <hr class="br_mini"></hr>
                
            </div>
            <div class="line_border_2">
                <div class="line1"></div>
                
                {/* <div class="line2"></div> */}
                
            </div>

            <div class="line_border_30">
                <div class="line1"></div>
                
                {/* <div class="line2"></div> */}
                
            </div>
            
            <div class="br"> 
                <hr class="br_mini_1"></hr>
                <hr class="br_mini_2"></hr>
            </div>
            <div>
                {/* under ulubari */}
                <div class ="cont_1">
                    <div class="tab_newgs">
                        
                        <New_gs />
                    </div>

                    <div class="tab_medical_eleven">
                        
                        <Medical_eleven />
                    </div>

                    <div class="tab_tv">
                        
                        <KV_TV />
                    </div>
                
                </div>

                {/* under kahilipara */}
                <div class ="cont_2">
                    <div class="tab_kachari_basti">
                        
                        <Kachari_Basti />
                    </div>
                    

                    <div class="tab_old_gs">
                        
                        <Old_gs />
                    </div>

                    <div class="tab_rupnagar">
                        
                        <Rupnagar />
                    </div>
                </div>
            </div>



//


        </div>

    );
}
export default Medical;