import React, { useState } from "react";
import Card from "../components/card/card";
import Form from "../components/form/form";

const AddUser = () => {
  const [userList, setUserList] = useState([]);

  const handleAddUsers = (e) => {
    e.preventDefault();
    let target = e.target;
    let data = {
      first_name: target[0].value,
      last_name: target[1].value,
      email: target[2].value,
      avatar: target[3].value,
    };
    let newUserList = [...userList];
    newUserList = [...newUserList, data];
    setUserList(newUserList);
  };
  return (
    <>
      <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}> Add New User </h2>
        <Form {...{ handleAddUsers }} />
      </div>
      <div style={{ display: "flex", marginTop: "50px" , marginLeft:'50px'}}>
        <div class="card-columns">
          {userList &&
            userList.map((user) => {
              return <Card {...{ todo: user }} />;
            })}
        </div>
      </div>
    </>
  );
};

export default AddUser;
