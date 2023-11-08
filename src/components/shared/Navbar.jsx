import { Trans } from "react-i18next";
// import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import i18next from "i18next";

export default function Navbar() {
  // NAVIGATE

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container fw-bold">
        <span className="navbar-brand">
          <Link to="/">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESDg8RBxIWEA8XGBUYEBMYDxUSEhETHhYaGSAVGRkYITQhGCYnIBgTIj0hMTUrOi4zGh8zODUuNygtLjcBCgoKDg0OGhAQGjclICU0Nzc3Nzc3MDc3NC03LTcrNzc3Liw3Ny0sLTcsLjE3MSs3LTcrMTczODEvNy0xNzgrLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABEEAABAwIDBAQLBQYFBQAAAAABAAIDBBEFEiEGEzFBByJRYRQVFzJUcYGRkpTSCBYj0dMkQlKTocFTcrLC8CUzgoOj/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIGA//EACURAQACAgEDAwUBAAAAAAAAAAABAgMRBAUhMUFhkRMUIjJREv/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQfi8K2qZFE+WoOVjAXOPYAoPj/SOIKmSGjhErWHK55kygu5gC3LgsSux52K4dUx0zd1PHlkMQfm30Y420Hu7QO1WFOm5tVvkjVZ139peFs9e8RPd5v6VHXOSlGXleY3t8Knmz+Lsq6Zk9PoHaObe5Y4cWn/AJ2LnxWBsjiJw7DpaqqGYTPaKeHNbMRe7+4fSO0K36j0vDXFH0Y/Leo90bDyLTb8vC1UVa0nSleRgqqcMjJAc4Sklovxtl1VjxvDgCw3BFwRwIVByOJm48xGSNbTKZa3/WXoiIo70EREBERAREQEREBERAREQEREBERAXjUxlzHtYcpIIDhxaSOK9l+JHYc6YlRvhmkiqhaRjiHd/fr28VIejuFzap1U9xjggY50zuRBaQGd99T7FutrtqqTwuRngUVSWdV0riAXOHEcOA1C8210ddhlVBhELaWWMiV0TDcTsHHkLnh7mrsMnJzZONEXpqLaiZ7don115VcY61v2nemtm2roy9xGGQ6knV9ifc1e23DhU01HWUAy04bunRDhBIDw04X0HLzW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" alt="Bootstrap" width="100" />
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link" aria-current="page">
                  <Trans i18nKey="home"></Trans>
                </span>
              </Link>
            </li>

            <li className="nav-item d-flex">
              <select
                value={localStorage.getItem("lng") || "ar"}
                className="nav-link border border-0 align-self-center selectpicker"
                onChange={(e) => {
                  localStorage.setItem("lng", e.target.value);
                  i18next.changeLanguage(e.target.value);
                }}
              >
                <option value="en">
                  <Trans i18nKey="english"> </Trans>
                </option>
                <option value="ar">
                  <Trans i18nKey="arabic"> </Trans>
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
