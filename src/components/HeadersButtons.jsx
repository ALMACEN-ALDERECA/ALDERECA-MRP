import GraphicsButton from "./GraphicsButton";
import OptionsButtons from "./OptionsButtons";

const HeadersButtons = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary mb-1 ms-1 shadow"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Opciones
          </button>
        </div>
        <div className="col">
          <div class="form-check form-switch d-flex justify-content-end p-2">
            <input
              class="form-check-input "
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label ps-1" for="flexSwitchCheckDefault">
              Activar/Desactivar graficos
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeadersButtons;
