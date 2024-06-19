import React from 'react';
import New_gs from '../components/medical_MFT/New_gs';
import Kachari_Basti from '../components/medical_MFT/Kachari_Basti';
import Medical from './Medical';

export default function Neharu_Stadium() {
    return (
        <div>
            <h4>this is Jail page</h4>
            <div className="S_container">
                <div className="com" id="s1">OUTGOING CUMULATIVE MW</div>
                <div className="com" id="s2">AVERAGE SYSTEM FREQUENCY</div>
                <div className="com" id="s3">AVERAGE SYSTEM PF</div>
                <div className="com" id="s4">TEMPERATURE AT SUBSTATION </div>
                <div className="com" id="s5">REFRESH RATE OF SYSTEM</div>
            </div>
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
    <Medical />
</div>
        </div>
    );
}
