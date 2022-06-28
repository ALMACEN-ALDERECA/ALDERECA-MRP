import { Fragment } from 'react';
const Header = () => {
  return (
    <Fragment>
      <div className='container-fluid py-4 bg-azul'>
        <div className='row'>
          <div className='col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center'>
            <img
              src='/AlderecafullWhite.png'
              alt='Logo Aldereca'
              className='img-fluid mw-100'
              style={{ width: '200px' }}
            />
          </div>
          <div className='col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 text-center d-flex '>
            <h1 className='m-auto text-white page-title'>
              Planificación de los requerimientos de material
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
