import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
const Escenestable = () => {
  const campUrl = 'http://localhost:8081/arescenarios';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(campUrl);
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='table-responsive'>
        <table className='table align-middle table-striped table-hover'>
          <thead className='table-title'>
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
  }
};

export default Escenestable;
