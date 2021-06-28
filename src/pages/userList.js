import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/card/card";
import Pagination from "react-js-pagination";
import '../App.css';

const UserList = () => {
  const history = useHistory();
  const [userList, setuserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(0);
  const [pageRange, setPageRange] = useState(0);

  useEffect(() => {
    getTodos();
  }, [currentPage]);

  const getTodos = () => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then((res) => res.json())
      .then((list) => {
        setuserList(list.data);
        setTotalCount(list.total);
        setItemPerPage(list.per_page);
        setPageRange(list.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePageChange = (pageno) => {
    setCurrentPage(pageno);
  };
  return (
    <Fragment>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <h2 style={{marginLeft:'10px'}}>Users</h2>
        <button
          onClick={() => history.push("/addUser")}
          type="button"
          class="btn btn-primary ml-5"
        >
          Add New User
        </button>
      </div>

      {userList && (
        <>
          <div style={{ display: "flex", marginTop: "50px" }}>
            {userList.map((todo) => {
              return <Card {...{ todo }} />;
            })}
          </div>
          <div style={{ marginTop:'30px'}}>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemPerPage}
            totalItemsCount={totalCount}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
          />
          </div>
          
        </>
      )}
    </Fragment>
  );
};

export default UserList;
