import bootstrap from 'bootstrap'; // No se puede quitar, sino no funciona el boton
const ModalsButtons = () => {
  return (
    <div className='buttons-wrapper '>
      <button
        type='button'
        class='btn bg-azul shadow mx-0 w-100 text-start'
        data-bs-toggle='modal'
        data-bs-target='#escenarios'
      >
        Crear los escenarios
      </button>

      <button
        type='button'
        class='btn bg-azul shadow mx-0 w-100 text-start mt-2'
        data-bs-toggle='modal'
        data-bs-target='#frecuencia'
      >
        Mostrar recomendaciones
      </button>
    </div>
  );
};
export default ModalsButtons;
