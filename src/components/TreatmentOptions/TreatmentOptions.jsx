import React from "react";
import "./treatmentOptions.css";
import familyImage from "../../assets/coppel-pay-coppel-salud-credito.png";
import farmaciaIcon from "../../assets/farmacia-leal.png";
import icon1 from "../../assets/1.svg";
import icon2 from "../../assets/2.svg";
import icon3 from "../../assets/3.svg";
import icon4 from "../../assets/4.svg";
import icon5 from "../../assets/5.svg";
import icon6 from "../../assets/6.png";
import icon7 from "../../assets/7.png";
import icon8 from "../../assets/8.svg";
import icon9 from "../../assets/9.svg";
import icon10 from "../../assets/10.svg";
import icon11 from "../../assets/11.svg";
import icon12 from "../../assets/12.svg";

const categories = [
    { name: "Alta especialidad", icon: icon1 },
    { name: "Medicamentos", icon: icon2 },
    { name: "Higiene y belleza", icon: icon3 },
    { name: "Salud deportiva", icon: icon4 },
    { name: "Bebés", icon: icon5 },
    { name: "Vitaminas y suplementos", icon: icon6 },
    { name: "Equipo y botiquín", icon: icon7 },
    { name: "Dermatológicos", icon: icon8 },
    { name: "Adulto mayor", icon: icon9 },
    { name: "Salud sexual", icon: icon10 },
    { name: "Nutrición", icon: icon11 },
    { name: "Naturista", icon: icon12 },
  ];

const TreatmentOptions = () => {
  return (
    <section className="treatment-section">
      <div className="treatment-container">
        <div className="treatment-text">
          <h3>¡Adquiere tu tratamiento con Crédito Coppel!</h3>
          <p>
            Usa Coppel Pay con tu Crédito Coppel para surtir tus recetas médicas y paga hasta en 12 meses.
          </p>
          <button className="treatment-button">Ver más sobre Coppel Pay</button>
        </div>
        <div className="treatment-image">
          <img src={familyImage} alt="Familia" />
        </div>
      </div>
      
      <h3 className="categories-title">Farmacia Digital</h3>
      <p className="categories-description">
        Tenemos para ti un amplio catálogo en línea con productos médicos de las mejores marcas, así como medicamentos genéricos y de patente, a precio accesible con tu Crédito Coppel. ¡Visita Coppel Salud y encuentra el tratamiento que necesitas para tu bienestar!
      </p>
      <div className="operator-container">
        <p>Operado por </p>
        <img src={farmaciaIcon} alt="farmacia" />
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
            <div key={index} className="category-card">
            <img src={category.icon} alt={category.name} className="category-icon" />
            <p>{category.name}</p>
            </div>
        ))}
        </div>
      <button className="pharmacy-button">Ir a la Farmacia Digital</button>
    </section>
  );
};

export default TreatmentOptions;
