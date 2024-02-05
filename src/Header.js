import React from 'react';

function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container border border-white mt-3 mb-3 p-2 rounded-5 bg-black">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand text-center mx-auto p-1" href="#">
            <p className="h4 text-light">
              <span>F</span>est
              <i className="bi bi-lightning color"></i>
              <i className="fa-sharp fa-solid fa-u text-danger "></i>p
            </p>
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-sm-flex">
              
           


            <div class="input-group mx-1 m-2">
  <button class="btn border border-end-0 bg-dark rounded-start-5" type="button" id="button-addon1"><i class="bi bi-search text-white"></i></button>
  <input type="text" class="form-control bg-dark text-white rounded-end-5 fs-5 " placeholder="Search for Events,Plays and Activities" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>

             
            </ul>
            <form className="d-flex flex-column flex-lg-row align-items-center" role="search">
              <button type="button" className="btn btn-dark rounded-5 mb-2 mb-lg-0">
                <i className="bi bi-geo-alt"></i> Indore
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-5 border-0 mx-lg-2"
                style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}
              >
                Sign in
              </button>
             
             
          
            </form>
          </div>
          <a className="navbar-brand text-center mx-auto" href="#">
          <button type="button" className="btn btn-dark rounded-circle ">
                <i className="fa-solid fa-user"></i>
              </button>
          </a>

          
        </div>
      </nav>
    
    </div>
  );
}

export default Header;
