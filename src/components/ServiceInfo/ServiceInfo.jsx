import React from "react";
import familyImage from "../../assets/coppel-salud-familia.png";
import "./serviceInfo.css";
import ServiceOptions from "../ServiceOptions/ServiceOptions";
import Benefits from "../Benefits/Benefits";

const ServiceInfo = () => {
  return (
    <section>
        <div className="service-info">
            <div className="image-container">
                <img src={familyImage} alt="Familia" />
            </div>
            <div className="text-container">
                <h2 className="subtittle-salud">¿Qué es Coppel Salud?</h2>
                <p>Es la opción fácil y accesible para que tú y tu familia reciban los productos y servicios de salud que necesitan en cualquier momento, desde cualquier lugar, y a un precio justo que puedas pagar con tu Crédito Coppel.</p>
            </div>
        </div>
        <div className="servicesOur">
            <h3>Descubre nuestros servicios</h3>
            <p>Coppel Salud es un programa integral diseñado para tu bienestar. Ponemos a tu alcance medicamentos y aparatos médicos de dermatología, nutrición y mucho más, para ayudarte a cuidar lo más importante: tu salud y la de tu familia.</p>
        </div>
        <ServiceOptions />
    </section>
  );
};

export default ServiceInfo;
