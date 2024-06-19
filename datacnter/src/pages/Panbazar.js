import React from 'react';
import PaltanBazar from '../components/PaltanBazar_data';


function Panbazar() {
  return (
    <div>
      <h4>this is panbazar page</h4>
      <div className="S_container">
        <div className="com" id="s1">OUTGOING CUMULATIVE MW</div>
        <div className="com" id="s2">AVERAGE SYSTEM FREQUENCY</div>
        <div className="com" id="s3">AVERAGE SYSTEM PF</div>
        <div className="com" id="s4">TEMPERATURE AT SUBSTATION </div>
        <div className="com" id="s5">REFRESH RATE OF SYSTEM</div>
      </div>
      <PaltanBazar />
    </div>
  );
}
export default Panbazar