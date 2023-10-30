import ListGroup from "./ListGroup";
import Message from "./Message";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">
        <div>
          <Message />
        </div>
        <div className="card"></div>
        <br></br>
        <div className="row">
          <ListGroup />
          &nbsp; &nbsp;
          <div className="col-md-8 bg-dark">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
