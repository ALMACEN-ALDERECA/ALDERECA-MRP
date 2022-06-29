import { Fragment } from 'react';
const Header = () => {
  return (
    <Fragment>
      <div className='container-fluid py-4 bg-azul'>
        <div className='row'>
          <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center'>
            <img
              src='/AlderecafullWhite.png'
              alt='Logo Aldereca'
              className='img-fluid mw-100'
              style={{ width: '140px' }}
            />
          </div>
          <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 text-center d-flex '>
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
