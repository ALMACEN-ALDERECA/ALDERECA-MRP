import Escenestable from "./Escenestable";
import { useState } from "react";
import InputsEscenesModal from "./InputsEscenesModal";
import CreateEscenesTable from "./CreateEscenesTable";
const EscenesModal = () => {
  const [escenesOptionsState, setEscenesOptionsState] = useState("");

  return (
    <div className="modals-wrapper">
      <div
        class="modal fade"
        id="escenarios"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Modal 1
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <select
                className="form-select mb-3"
                value={escenesOptionsState}
                aria-label="Default select example"
                onChange={(e) => {
                  const selectedEscenesOptions = e.target.value;
                  setEscenesOptionsState(selectedEscenesOptions);
                }}
              >
                <option selected value="create">
                  Crear escenario
                </option>
                <option value="select">Seleccionar escenario</option>
              </select>
              {escenesOptionsState === "select" ? (
                <Escenestable />
              ) : (
                <InputsEscenesModal />
              )}
            </div>
            <div class="modal-footer">
              {escenesOptionsState === "select" ? (
                <button className="btn btn-primary">Iniciar</button>
              ) : null}
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <CreateEscenesTable />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscenesModal;
