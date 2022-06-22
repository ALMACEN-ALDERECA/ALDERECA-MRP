import React, { Fragment } from 'react';
import spin from './Loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img
        src={spin}
        alt='Loading...'
        className='inline-block align-middle'
        style={{ width: '200px', margin: 'auto' }}
      />
    </Fragment>
  );
};

export default Loading;
