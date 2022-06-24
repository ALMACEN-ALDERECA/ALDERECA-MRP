const HeadersButtons = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex justify-content-start'>
            <button
              className='btn bg-azul my-2 shadow'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasScrolling'
              aria-controls='offcanvasScrolling'
            >
              Opciones
            </button>
          </div>
        </div>
        <div className='col align-self-center'>
          <div class='form-check form-switch d-flex justify-content-end '>
            <input
              class='form-check-input shadow'
              type='checkbox'
              id='flexSwitchCheckDefault'
            />
            <i class='fa-solid fa-chart-line ps-2 pt-1 me-1'></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeadersButtons;
