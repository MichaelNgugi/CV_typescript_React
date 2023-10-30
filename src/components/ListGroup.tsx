import { NavLink } from "react-router-dom";

function ListGroup() {
  return (
    <div
      id="navigate"
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    >
      <span className="fs-4">Contents</span>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" className="nav-link text-white">
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className="nav-link text-white">
            Special Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/activities" className="nav-link text-white">
            Extra-Curricula Activities
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/hobbies" className="nav-link text-white">
            Hobbies and Interests
          </NavLink>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
}

export default ListGroup;
