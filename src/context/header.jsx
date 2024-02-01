import logo from '/logo-crop-jpeg.jpg';
import rus from '../assets/ru.png';
import kaz from '../assets/kz.png';
import eng from '../assets/uk.webp';

export default function Header() {

  let cityWindow = "city-window";

  function handleCityClick() {
    if(cityWindow === "city-window") {
      
    } else {

    }
  }

  return(
    <header className="header">
      <section className="upper-header">
        <div className="left-div">
          <div style={{"marginLeft" : "5px"}}>
            <button onClick={() => handleCityClick(cityWindow)}>City</button>
            <div className={cityWindow}>
              <ul>
                <li>Объект 1</li>
                <li>Объект 2</li>
                <li>Объект 3</li>
              </ul>
            </div>
          </div>
          <div>
            <button>
              <a href="/addresses">
                Addresses
              </a>
            </button>
          </div>
          <div>
            <button>
              Theme
            </button>
          </div>
        </div>
        <div className="right-lang-div">
          <button className="lang-button btn btn-outline-secondary">
            <img src={rus} width="25" height="25" />
            <span>Rus</span>
          </button>
          <button className="lang-button btn btn-outline-secondary">
            <img src={kaz} width="25" height="25" />
            <span>Kaz</span>
          </button>  
          <button className="lang-button btn btn-outline-primary">
            <img src={eng} width="25" height="25" />
            <span>Eng</span>
          </button>
        </div>
      </section>
      <section className="lower-header">
        <div className="left-lower-div">
          <div style={{"marginLeft" : "5px"}}>
            <a href="#">
              <img className="logo" src={logo} />
            </a>
          </div>
          <div>
            <button>
              <img />
              Catalogue
            </button>
          </div>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <button>
            <img />
            <p></p>
          </button>
          <button>
            <img />
            <p></p>
          </button>
          <button>
            <img />
            <p></p>
          </button>
          <button>
            <img />
            <p></p>
          </button>
        </div>
      </section>
    </header>
  )
}



/*
export default function Header() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar scroll</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Link</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    );
}
*/