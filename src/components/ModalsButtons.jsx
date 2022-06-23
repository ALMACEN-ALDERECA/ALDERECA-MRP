import bootstrap from "bootstrap"; // No se puede quitar, sino no funciona el boton
const ModalsButtons = () => {
  return (
    <div className="">
      <div className="buttons-wrapper ">
        <button
          type="button"
          class="btn btn-primary btn-md shadow mb-3 p-1"
          data-bs-toggle="modal"
          data-bs-target="#escenarios"
        >
          Crear los escenarios
        </button>
        <button
          type="button"
          class="btn btn-primary btn-md shadow mb-3 p-1"
          data-bs-toggle="modal"
          data-bs-target="#frecuencia"
        >
          Mostrar recomendaciones
        </button>
      </div>
    </div>
  );
};
export default ModalsButtons;
