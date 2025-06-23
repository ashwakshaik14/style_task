import React, { useState } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import Navbar from "./Nav";

function Aadhar() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, id: Date.now() }),
    });
    setFormData({ name: "", phone: "", gender: "", age: "" });
  };

  return (
    <>
    <Navbar/>
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <h1>
        Aadhar Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          label="Age"
          name="age"
          fullWidth
          margin="normal"
          value={formData.age}
          onChange={handleChange}
        />
        <RadioGroup
          row
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Container>

    </>
  );
}

export default Aadhar;
