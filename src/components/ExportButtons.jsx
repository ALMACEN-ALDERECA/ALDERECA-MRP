import bootstrap from 'bootstrap';

const ExportButtons = () => {
  return (
    <div className='button-export-wrapper mt-3'>
      <button
        className='btn btn-success btn-md shadow w-100 mx-0 text-start'
        type='button'
      >
        <i class='fa-solid fa-file-excel excel-icon'></i> Exportar reporte
      </button>

      <button
        type='button'
        class='btn btn-success btn-md shadow w-100 mx-0 my-2 text-start'
        data-toggle='modal'
        data-target='#import'
      >
        <i className='fa-solid fa-file-excel excel-icon'></i> Importar
        parametros
      </button>

      <button
        className='btn btn-success btn-md shadow mx-0 w-100 text-start'
        type='button'
      >
        <i class='fa-solid fa-file-excel excel-icon'></i> Exportar paramametros
      </button>
    </div>
  );
};
export default ExportButtons;
