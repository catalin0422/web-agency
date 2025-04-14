import React from "react";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="features-title">
          <h2>CE NE RECOMANDĂ</h2>
        </div>
        <div className="row">
        <div className="features-box">
            <i className="fa fa-dollar"></i>
            <h3>Costuri minime de întreținere</h3>
            <p>Nu ai de plătit lunar pentru platforme externe</p>
          </div>
          <div className="features-box">
            <i className="fa fa-tachometer"></i>
            <h3>Viteză de încărcare</h3>
            <p>Site-urile noastre se încarcă rapid, pentru a reduce rata de părăsire</p>
          </div>
          <div className="features-box">
            <i className="fa fa-mobile"></i>
            <h3>Responsive</h3>
            <p>Site-uri care arată perfect pe orice dispozitiv</p>
          </div>
          <div className="features-box">
            <i className="fa fa-pencil"></i>
            <h3>Design personalizat</h3>
            <p>Fiecare proiect este unic și adaptat brandului tău</p>
          </div>
        </div>
      </div>
    </div>
  );
};
