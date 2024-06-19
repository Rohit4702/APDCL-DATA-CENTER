import React from 'react';
import Ulubari_data from '../components/Ulubari_data';

function Ulubari() {
  return (
    <div>
      <h4>this is Ulubari page</h4>
      <div className="S_container">
        <div className="com" id="s1">OUTGOING CUMULATIVE MW</div>
        <div className="com" id="s2">AVERAGE SYSTEM FREQUENCY</div>
        <div className="com" id="s3">AVERAGE SYSTEM PF</div>
        <div className="com" id="s4">TEMPERATURE AT SUBSTATION </div>
        <div className="com" id="s5">REFRESH RATE OF SYSTEM</div>
      </div>
      <Ulubari_data />

    </div>
  );
}
export default Ulubari