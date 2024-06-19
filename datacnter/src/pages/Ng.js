import React from 'react';
import '../styles/ngstyle.css'
import { useNavigate,Link } from 'react-router';
import Neharu_Stadium_data from '../components/Neharu_Stadium_data';
import Bamunimaidan_data from '../components/Bamunimaidan_data';


 function Ng() {
  const navigate = useNavigate();


  const Uzanbazar=()=>{
    navigate('/uzanbazar')
  }


  const Paltanbazar=()=>{
    navigate('/paltanbazar')
  }

  const Medical=()=>{
    navigate('/Medical')
  }


  const Jail=()=>{
    navigate('/Jail')
  }

  const Kalapahar=()=>{
    navigate('/kalapahar')
  }

  const Jalukbari=()=>{
    navigate('/jalukbari')
  }

 

  const Neharu_Stadium_data=()=>{
    navigate('/neharustadium')

  }

  const Bamunimaidan=()=>{
    navigate('/bamunimaidan')
  }

  return (
  <>
  <div className="container">
    <div className="c1" id="z7"><button onClick={Neharu_Stadium_data}> Neharu Stadium</button></div>
    <div className="c1" id="z2"><button onClick={Jail}>Jail</button></div>
    <div className="c1" id="z1"><button onClick={Uzanbazar}>Uzanbazar</button></div>
    <div className="c1" id="z3"><button onClick={Medical}>Medical</button></div>
    <div className="c1" id="z4"><button onClick={Paltanbazar}>Paltanbazar</button></div>
    <div className="c1" id="z5"><button onClick={Jalukbari}>Jalukbari</button></div>
    <div className="c1" id="z5"><button onClick={Kalapahar}>Kalapahar</button></div>
    <div className="c1" id="z5"><button onClick={Bamunimaidan}>Bamunimaidan</button></div>
  </div>
  </>
  );
}
export default Ng