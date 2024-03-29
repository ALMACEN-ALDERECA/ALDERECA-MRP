import MyDropzone from "./Dropzone";

const ImportModal = () => {
  return (
    <div>
      <div
        className="modal fade h-25"
        id="import"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered h-50" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Importar</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="file-upload-wrapper">
                <input
                  type="file"
                  id="input-file-now-custom-2"
                  class="file-upload"
                  data-height="500"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn bg-azul">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImportModal;
