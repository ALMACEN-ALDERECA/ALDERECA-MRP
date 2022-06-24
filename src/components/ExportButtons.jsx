import bootstrap from 'bootstrap';

const ExportButtons = () => {
  return (
    <div className='button-export-wrapper'>
      <button
        className='btn w-100 mx-0 text-start'
        type='button'
        data-bs-toggle='modal'
        data-bs-target='#escenarios'
      >
        <i class='fa-solid fa-plus'></i> Crear escenarios
      </button>
      <button
        className='btn w-100 mx-0 text-start'
        type='button'
        data-bs-toggle='modal'
        data-bs-target='#frecuencia'
      >
        <i class='fa-solid fa-sheet-plastic'></i> Mostrar recomendaciones
      </button>
      <hr />
      <button
        type='button'
        class='btn w-100 mx-0 text-start '
        data-toggle='modal'
        data-target='#import'
      >
        <i class='fa-solid fa-file-import'></i> Importar parametros
      </button>
      <button className='btn w-100 mx-0 text-start' type='button'>
        <i class='fa-solid fa-file-export'></i> Exportar reporte
      </button>

      <button className='btn mx-0 w-100 text-start ' type='button'>
        <i class='fa-solid fa-file-export'></i> Exportar paramametros
      </button>
    </div>
  );
};
export default ExportButtons;
