import React, { Fragment } from 'react';
import spin from '../assets/loadRing.gif';

const Loading = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-12 text-center'>
            <img
              src={spin}
              alt='Loading...'
              className='inline-block align-middle'
              style={{ width: '200px', margin: '14% auto' }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
