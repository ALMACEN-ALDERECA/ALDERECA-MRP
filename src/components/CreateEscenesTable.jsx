import { useState } from "react";

const CreateEscenesTable = () => {
  const [CreateOptionsState, setCreateOptionsState] = useState("");

  return (
    <div>
      <label>Tipo de busqueda</label>
      <select
        name=""
        id=""
        value={CreateOptionsState}
        className="form-select mb-3 w-25"
        onChange={(e) => {
          const selectedCreateOptions = e.target.value;
          setCreateOptionsState(selectedCreateOptions);
        }}
      >
        <option value="Marca">Marca</option>
        <option value="Fabricante">Fabricante</option>
        <option value="Descripcion">Descripcion</option>
      </select>

      <div class="input-group my-3 w-75">
        <input
          type="text"
          className="form-control"
          placeholder={CreateOptionsState}
          aria-label="Nombre"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="table-responsive">
        <table className="table align-middle table-striped table-hover">
          <thead className="table-title">
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Ultima ejecucion</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateEscenesTable;
