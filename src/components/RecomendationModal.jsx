const RecomendationModal = () => {
  return (
    <div
      class="modal fade"
      id="frecuencia"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="exampleModalLabel">
              Recomendaciones
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table className="table align-middle table-striped table-hover">
              <thead className="table-title">
                <tr>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th>Example</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn bg-azul">
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendationModal;
