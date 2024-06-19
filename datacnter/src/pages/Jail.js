import React from 'react';
import Jail_data from '../components/Jail_data';

function Jail() {
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
      <Jail_data/>
    </div>
  );
}
export default Jail