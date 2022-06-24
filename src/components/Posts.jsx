import React from 'react';
import Loading from './Loading';

const Posts = ({ data, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <table className='table align-middle table-striped table-hover'>
        <thead className='table-title'>
          <tr>
            <th>#Articulo</th>
            <th>Descripcion</th>
            <th>#Fabricante</th>
            <th>#Original</th>
            <th>On Hand</th>
            <th>Cantidad maxima</th>
            <th>Cantidad minima</th>
            <th>Rotacion</th>
            <th>Desviacion standard</th>
            <th>Regresion</th>
            <th>Proyeccion</th>
            <th>StockOut</th>
            <th>OverStock</th>
            <th>Ultima fecha de compra</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.ItemCode}</td>
              <td>{post.ItemName}</td>
              <td>{post.NúmerodeFabricante}</td>
              <td>{post.NúmeroOriginal}</td>
              <td>{post.OnHand}</td>
              <td>{post.MinLevel}</td>
              <td>{post.MaxLevel}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{post.lastPurDat == null ? 'Vacio' : post.lastPurDat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default Posts;
