import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { PieChart } from "@mui/x-charts/PieChart";


import Navbar from "./Nav";

function Dash() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/user");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 3000); // auto-refresh every 3 sec
    return () => clearInterval(interval);
  }, []);

  const genderData = [
    {
      id: 0,
      value: users.filter((u) => u.gender === "male").length,
      label: "Male",
    },
    {
      id: 1,
      value: users.filter((u) => u.gender === "female").length,
      label: "Female",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "age", headerName: "Age", width: 100 },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <h1>Registered Users</h1>
        <div style={{ height: 400 }}>
          <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={5}
          />
        </div>
        <PieChart series={[{ data: genderData }]} width={300} height={300} />
      </Container>
    </>
  );
}

export default Dash;
