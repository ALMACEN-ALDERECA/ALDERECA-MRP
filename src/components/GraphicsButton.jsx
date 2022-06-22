const GraphicsButton = () => {
  return (
    <div class="form-check form-switch d-flex justify-content-end">
      <input
        class="form-check-input "
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Activar/desactivar graficos
      </label>
    </div>
  );
};

export default GraphicsButton;
