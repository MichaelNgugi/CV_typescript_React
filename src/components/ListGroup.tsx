import { Link } from "react-router-dom";

function ListGroup() {
  return (
    <div
      id="navigate"
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/education" className="nav-link text-white">
            Education
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            Customers
          </a>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
}

export default ListGroup;
