import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const assignmentlice = createSlice({
  name: "assesment",
  initialState: JSON.parse(localStorage.getItem("assignment")) || [],
  reducers: {
    ADD_ASSIGNMENT(state, action) {
      const payload = { id: nanoid(5), ...action.payload };
      state.push(payload);
      localStorage.setItem("assignment", JSON.stringify(state));
    },
    DELETE_ASSIGNMENT(state, action) {
      let index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("assignment", JSON.stringify(state));
    },
    EDIT_ASSIGNMENT(state, action) {
      // id newOBJ
      let index = state.findIndex((obj) => obj.id === action.payload.id);
      state[index] = { id: state[index].id, ...action.payload.assignment };
      localStorage.setItem("assignment", JSON.stringify(state));
    },
  },
});

export const { reducer, actions } = assignmentlice;
