import Escenestable from './Escenestable';
import { useState } from 'react';
import InputsEscenesModal from './InputsEscenesModal';
const EscenesModal = () => {
  const [escenesOptionsState, setEscenesOptionsState] = useState('');

  return (
    <div
      className='modal fade'
      id='escenarios'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header bg-azul'>
            <h5 className='modal-title text-white' id='exampleModalLabel'>
              Crear/cargar escenarios...
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <select
              className='form-select mb-3'
              value={escenesOptionsState}
              aria-label='Default select example'
              onChange={(e) => {
                const selectedEscenesOptions = e.target.value;
                setEscenesOptionsState(selectedEscenesOptions);
              }}
            >
              <option selected value='create'>
                Crear escenario
              </option>
              <option value='select'>Seleccionar escenario</option>
            </select>
            {escenesOptionsState === 'select' ? (
              <Escenestable />
            ) : (
              <InputsEscenesModal />
            )}
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn bg-azul'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscenesModal;
