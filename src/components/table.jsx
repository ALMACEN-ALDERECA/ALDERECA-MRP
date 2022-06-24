import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function Table() {
  const campUrl = "http://localhost:8081/campos";
  const [data, setData] = useState([]);

  //Loading while the data is rendering
  const [loading, setLoading] = useState([false]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  //This is the Method Get
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(campUrl);
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  //END OF THIS BLOCK

  //Get Current Posts
  const indexofLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexofLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexofLastPost);

  //Change the page
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="table-responsive">
      {/*The table is rendering in the component Post because it will be inserted by dynamically way in the nexts days*/}
      <Posts data={currentPost} loading={loading} />

      {/*This component contains the pagination function*/}
      <Pagination
        postsPerPage={postPerPage}
        totalPost={data.length}
        paginate={paginate}
      />
    </div>
  );
}
export default Table;
