import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/")}
          >
            Assignment Manager
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Assignments
          </Button>
          <Button color="inherit" onClick={() => navigate("/add")}>
            Add Assignment
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
