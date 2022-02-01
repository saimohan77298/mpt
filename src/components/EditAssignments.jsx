import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { editAssignment } from "../store/actions";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function EditAssignments() {
  const assignments = useSelector((state) => state.assignment);
  const params = useParams();
  const navigate = useNavigate();
  // current assignment
  const ca = assignments.find((item) => item.id === params.id);

  const [formData, setFormData] = useState({
    title: ca.title,
    status: ca.status,
    details: ca.details,
  });
  const [errors, setErrors] = useState({
    title: false,
    status: false,
    details: false,
  });
  const handleSubmit = (id) => {
    setErrors({ title: false, status: false, details: false });
    if (title === "") setErrors({ ...errors, title: true });
    if (status === "") setErrors({ ...errors, status: true });
    if (details === "") setErrors({ ...errors, details: true });

    if (title && status && details) {
      editAssignment(id, formData);
      setFormData({ title: "", status: "", details: "" });
      navigate("/");
    }
  };
  const { title, status, details } = formData;

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: "2rem" }}>
        Add Assignment
      </Typography>
      <TextField
        variant="outlined"
        sx={{ marginTop: "2rem" }}
        fullWidth
        label="Title"
        value={title}
        required
        error={errors.title}
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
        }}
      />
      <TextField
        variant="outlined"
        sx={{ marginTop: "2rem" }}
        label="Status"
        required
        fullWidth
        error={errors.status}
        value={status}
        onChange={(e) => {
          setFormData({ ...formData, status: e.target.value });
        }}
      />
      <TextField
        variant="outlined"
        sx={{ marginY: "2rem" }}
        multiline
        fullWidth
        required
        error={errors.details}
        rows={4}
        value={details}
        label="Details"
        onChange={(e) => {
          setFormData({ ...formData, details: e.target.value });
        }}
      />
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            handleSubmit(params.id);
          }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </Container>
  );
}
