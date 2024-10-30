import React from "react";
import "./benefits.css";
import recetaIcon from "../../assets/documentos.svg";
import envioIcon from "../../assets/Enviogratis1.2.svg";
import preciosIcon from "../../assets/dinero.svg";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <h3 className="benefits-title">Beneficios de Coppel Salud</h3>
      <div className="benefits-container">
        <div className="benefit-card">
          <img src={recetaIcon} alt="Recetas Médicas Completas" className="benefit-icon" />
          <h4>Recetas Médicas Completas</h4>
          <p>Suritmos tus recetas médicas, ya sean de Coppel Salud o de otras farmacias.</p>
        </div>
        <div className="benefit-card">
          <img src={envioIcon} alt="Envío gratis" className="benefit-icon" />
          <h4>Envío gratis</h4>
          <p>Recibe tu tratamiento en donde estés, y ahorra tiempo evitando hacer filas.</p>
        </div>
        <div className="benefit-card">
          <img src={preciosIcon} alt="Precios accesibles" className="benefit-icon" />
          <h4>Precios accesibles</h4>
          <p>Adquiere tu tratamiento genérico o de patente a precios justos y paga a plazos con tu Crédito Coppel.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
