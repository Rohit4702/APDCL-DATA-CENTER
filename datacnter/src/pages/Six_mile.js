import React from 'react';
import Six_mile_data from '../components/Six_mile_data';
function Six_mile() {
    return (
        <div>
            <h3>SIxmile</h3>
            <div className="S_container">
                <div className="com" id="s1">OUTGOING CUMULATIVE MW</div>
                <div className="com" id="s2">AVERAGE SYSTEM FREQUENCY</div>
                <div className="com" id="s3">AVERAGE SYSTEM PF</div>
                <div className="com" id="s4">TEMPERATURE AT SUBSTATION </div>
                <div className="com" id="s5">REFRESH RATE OF SYSTEM</div>
            </div>
            <Six_mile_data />
        </div>
    );
}

export default Six_mile