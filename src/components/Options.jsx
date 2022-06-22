import ModalsButtons from './ModalsButtons';
import ExportButtons from './ExportButtons';

const Options = () => {
  return (
    <div className='Options-wrapper'>
      <button
        className='btn btn-primary my-2 ms-2 shadow'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasScrolling'
        aria-controls='offcanvasScrolling'
      >
        Opciones
      </button>

      <div
        className='offcanvas offcanvas-start'
        data-bs-scroll='true'
        data-bs-backdrop='false'
        tabindex='-1'
        id='offcanvasScrolling'
        aria-labelledby='offcanvasScrollingLabel'
      >
        <div className='offcanvas-header bg-azul'>
          <h5
            className='offcanvas-title text-white'
            id='offcanvasScrollingLabel'
          >
            Opciones
          </h5>
          <button
            type='button'
            class='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <ModalsButtons />
          <ExportButtons />
        </div>
      </div>
    </div>
  );
};
export default Options;
