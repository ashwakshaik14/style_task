import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      Aadhar App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
