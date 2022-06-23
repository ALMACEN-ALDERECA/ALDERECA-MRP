import bootstrap from "bootstrap";

const ExportButtons = () => {
  return (
    <div className="button-export-wrapper">
      <button
        className="btn btn-success btn-sm shadow w-100 text-start"
        type="button"
      >
        <i class="fa-solid fa-file-excel excel-icon"> Exportar reporte</i>
      </button>

      <button
        type="button"
        class="btn btn-success btn-sm shadow w-100 my-1 text-start"
        data-toggle="modal"
        data-target="#import"
      >
        <i className="fa-solid fa-file-excel excel-icon ">
          Importar parametros
        </i>
      </button>

      <button
        className="btn btn-success btn-sm shadow w-100 text-start"
        type="button"
      >
        <i class="fa-solid fa-file-excel excel-icon"> Exportar paramametros</i>
      </button>
    </div>
  );
};
export default ExportButtons;
