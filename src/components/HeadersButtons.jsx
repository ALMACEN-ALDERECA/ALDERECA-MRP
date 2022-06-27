const HeadersButtons = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {/* <a class='navbar-brand' href='#'>
          Navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <button
                className="border-0 bg-white"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                Opciones
              </button>
              <button
                type="button"
                class="btn btn-light   ms-2 btn-xs"
                data-toggle="modal"
                data-target="#modelId"
              >
                Analisis por mes
              </button>
            </li>
          </ul>
          <li class="nav-item list-group-numbered">
            <input
              class="form-check-input shadow"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <i class="fa-solid fa-chart-line ps-2 pt-1 me-1"></i>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default HeadersButtons;
