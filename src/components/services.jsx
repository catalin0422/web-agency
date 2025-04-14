import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Serviciile noastre</h2>
          <p>
          Site-uri moderne, rapide și adaptate brandului tău
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
