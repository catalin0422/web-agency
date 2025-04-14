import React from "react";

export const Header = (props) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="header-title">
                    Creăm pagini web moderne pentru afacerea ta
                </h1>
                <p></p>
                <a
                  onClick={handleScroll}  className="btn btn-custom btn-lg page-scroll" style={{ cursor: "pointer" }} >
                  Vezi mai mult
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
