import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Despre noi</h2>
              <p>Suntem o agenție digitală specializată în crearea de landing pages care convertesc. Ne place să combinăm designul curat cu strategia, astfel încât fiecare pagină pe care o livrăm să nu fie doar frumoasă, ci și eficientă.

Lucrăm cu antreprenori, startup-uri și afaceri care vor mai mult de la prezența lor online. Fiecare proiect este o colaborare – ascultăm, analizăm și construim pagini web care spun povestea ta și aduc rezultate reale.

Suntem o echipă mică, dar dedicată, care crede în simplitate, viteză și impact. Dacă îți dorești o prezență online care face diferența, ești în locul potrivit.</p>
              <h3>De ce sa ne alegi pe noi?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li> Pagini care convertesc</li>
                    <li> Livrare rapidă</li>
                    <li> Design responsive</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                  <li> Soluții personalizate</li>
                  <li> Comunicare clară</li>
                  <li> Optimizare SEO & viteză</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
