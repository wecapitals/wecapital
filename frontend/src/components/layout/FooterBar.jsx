import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSearch } from "react-icons/fi"; // Import the search icon
import WeCapital from "../../img/WeCapital.png";
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid">
          <a href="/">
            <img
              src={WeCapital}
              alt="WeCapital"
              className="navbar-brand img-fluid"
              style={{ maxHeight: "60px", marginRight: "15px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarNav">
            <ul className="navbar-nav ms-auto me-2">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary fw-semibold"
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  អំពីយើង
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="#">ប្រវត្តិរូប</a></li>
                  <li><a className="dropdown-item" href="#">ចក្ខុវិស័យ</a></li>
                  <li><a className="dropdown-item" href="#">ក្រុមការងារ</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary fw-semibold"
                  href="#"
                  id="productsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ផលិតផល
                </a>
                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                  <li><a className="dropdown-item" href="#">កម្ចី</a></li>
                  <li><a className="dropdown-item" href="#">សន្សំ</a></li>
                  <li><a className="dropdown-item" href="#">វិនិយោគ</a></li>
                </ul>
              </li>

              {/* Promotions with dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary fw-semibold"
                  href="#"
                  id="promotionsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ប្រូម៉ូសិន
                </a>
                <ul className="dropdown-menu" aria-labelledby="promotionsDropdown">
                  <li><a className="dropdown-item" href="#">ប្រូម៉ូសិនបច្ចុប្បន្ន</a></li>
                  <li><a className="dropdown-item" href="#">ប្រូម៉ូសិនឆាប់ៗនេះ</a></li>
                </ul>
              </li>

              {/* Contact with dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary fw-semibold"
                  href="#"
                  id="contactDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ទំនាក់ទំនង
                </a>
                <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                  <li><a className="dropdown-item" href="#">ទីតាំងយើង</a></li>
                  <li><a className="dropdown-item" href="#">ទំនាក់ទំនងផ្សេងៗ</a></li>
                  <li><a className="dropdown-item" href="#">សំណួរចម្លើយ</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <button className="btn bg-primary p-0">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    aria-label="Search"
                  >
                    <FiSearch size={20} className="p-0 m-0" />
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

