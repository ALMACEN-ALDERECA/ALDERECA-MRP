import ModalsButtons from "./ModalsButtons";
import ExportButtons from "./ExportButtons";

const Options = () => {
  return (
    <div className="Options-wrapper">
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-white"
            id="offcanvasScrollingLabel"
          >
            Opciones
          </h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span>×</span>
          </button>
        </div>
        <div className="offcanvas-body">
          <ModalsButtons />
          <ExportButtons />
        </div>
      </div>
    </div>
  );
};
export default Options;
