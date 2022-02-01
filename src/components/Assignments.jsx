import * as React from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Container,
  Typography,
  IconButton,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Box,
} from "@mui/material";
import { deleteAssignment } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const assignments = useSelector((state) => state.assignment);
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant={"h4"} sx={{ marginY: "2rem" }}>
        Your Assignments
      </Typography>
      <TableContainer variant="outlined" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Trash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {assignments.indexOf(row) + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/edit/${row.id}`)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteAssignment(row.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
