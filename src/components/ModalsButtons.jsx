import bootstrap from 'bootstrap'; // No se puede quitar, sino no funciona el boton
const ModalsButtons = () => {
  return (
    <div className>
      <div className='buttons-wrapper '>
        <div className='row'>
          <div className='col'>
            <button
              type='button'
              class='btn btn-primary btn-md shadow p-1 w-100 text-start'
              data-bs-toggle='modal'
              data-bs-target='#escenarios'
            >
              Crear los escenarios
            </button>
          </div>
        </div>
        <div className='row py-1 '>
          <div className='col'>
            <button
              type='button'
              class='btn btn-primary btn-md shadow p-1 w-100 text-start'
              data-bs-toggle='modal'
              data-bs-target='#frecuencia'
            >
              Mostrar recomendaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalsButtons;
