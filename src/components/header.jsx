import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <nav id="nav" className="navbar navbar-expand-sm navbar-light p-4 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/AlderecafullWhite.png" alt="" width={100} />
          </a>
          <h1 className="m-auto text-white page-title">
            Planificación de los requerimientos de material
          </h1>
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
