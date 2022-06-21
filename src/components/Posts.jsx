import React from "react";
import Loading from "./Loading";

const Posts = ({ data, loading }) => {
  if (loading) {
  }
  return (
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
          <td>{post.lastPurDat == null ? "Vacio" : post.lastPurDat}</td>
        </tr>
      ))}
      {loading && <Loading />}
    </tbody>
  );
};

export default Posts;
