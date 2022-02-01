import { store } from "./store";
import { actions as Assignment } from "./assignment";
const { dispatch } = store;

export const addAssignment = (assignment) => {
  dispatch(Assignment.ADD_ASSIGNMENT(assignment));
};

export const deleteAssignment = (id) => {
  dispatch(Assignment.DELETE_ASSIGNMENT(id));
};

export const editAssignment = (id, obj) => {
  dispatch(Assignment.EDIT_ASSIGNMENT({ id, assignment: obj }));
};
