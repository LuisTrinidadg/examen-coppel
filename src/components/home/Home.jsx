import React from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import logo from "../../assets/logo-coppel-salud.svg";
import vector from "../../assets/coppel-salud-vector.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <div className="vector-container">
            <img src={vector} alt="Coppel Salud Vector" style={{ width: '100%' }} />
        </div>
        
        <div className="logo-container">
            <img src={logo} alt="Coppel Salud" className="logo" />
            <p className="subtitle">Tu salud y la de tu familia es lo más importante</p>
            <button className="button">Ir a la Farmacia Digital</button>
        </div>
        </div>
      <ServiceInfo />
    </div>
  );
};

export default Home;
