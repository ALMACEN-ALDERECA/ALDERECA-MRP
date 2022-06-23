import { useEffect, useState } from "react";
import axios from "axios";

const Escenestable = () => {
  const campUrl = "http://localhost:8081/escenarios";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(campUrl);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
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
          {data.map((stages) => (
            <tr key={stages.id}>
              <td>{stages.Name}</td>
              <td>{stages.U_Descr}</td>
              <td>{stages.U_LastExecDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Escenestable;
