import React from 'react';
import Bamunimaidan_data from '../components/Bamunimaidan_data';

 function Bamunimaidan() {
    return (
        <div>
            <div className="S_container">
                <div className="com" id="s1">OUTGOING CUMULATIVE MW</div>
                <div className="com" id="s2">AVERAGE SYSTEM FREQUENCY</div>
                <div className="com" id="s3">AVERAGE SYSTEM PF</div>
                <div className="com" id="s4">TEMPERATURE AT SUBSTATION </div>
                <div className="com" id="s5">REFRESH RATE OF SYSTEM</div>
            </div>
            {/* <Bamunimaidan_data /> */}
        </div>
    );
}
export default Bamunimaidan;