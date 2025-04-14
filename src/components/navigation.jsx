import React from "react";

export const Navigation = (props) => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#header"
            onClick={(e) => handleNavClick(e, "header")}
            style={{ cursor: "pointer" }}
          >
            CIl
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {[
             { id: "features", label: "Avantaje" },
              { id: "about", label: "Despre Noi" },
              { id: "services", label: "Servicii" },
              { id: "portfolio", label: "Portofoliu" },
              // { id: "testimonials", label: "Testimoniale" },
              // { id: "team", label: "Echipa" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="page-scroll"
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
