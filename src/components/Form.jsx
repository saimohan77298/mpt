import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addAssignment } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    details: "",
  });
  const [errors, setErrors] = useState({
    title: false,
    status: false,
    details: false,
  });
  const handleSubmit = () => {
    setErrors({ title: false, status: false, details: false });
    if (title === "") setErrors({ ...errors, title: true });
    if (status === "") setErrors({ ...errors, status: true });
    if (details === "") setErrors({ ...errors, details: true });

    if (title && status && details) {
      addAssignment(formData);
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
            handleSubmit();
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
