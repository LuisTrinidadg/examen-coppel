import React from "react";
import "./serviceOptions.css";
import farmaciaIcon from "../../assets/Medicina.svg";
import saludIcon from "../../assets/Mask.svg";

const ServiceOptions = () => {
  return (
    <div className="service-options-container">
        <div className="service-card">
            <img src={farmaciaIcon} alt="Farmacia Digital" className="service-icon" />
            <div>
                <h4>Farmacia Digital</h4>
                <p>En la Farmacia Coppel Salud encontrarás una gran variedad de medicamentos genéricos y de patente que necesitas, ¡con envío hasta tu domicilio!</p>
                <a href="#farmacia-digital" className="service-link">Comprar</a>
            </div>
        </div>

        <div className="service-card">
            <img src={saludIcon} alt="Salud y Bienestar" className="service-icon" />
            <div>
                <h4>Salud y Bienestar</h4>
                <p>Desde sueros hasta rodilleras y sillas de ruedas, ofrecemos aparatos médicos especializados y demás productos para atender todo tipo de padecimientos.</p>
                <a href="#salud-bienestar" className="service-link">Comprar</a>
            </div>
        </div>
    </div>
  );
};

export default ServiceOptions;
