import {
  ADD_SERVICE,
  EDIT_SERVICE,
  EDITING_SERVICE,
  END_CHANGES_SERVICE,
  FORM_CHANGE_FIELD_SERVICE,
  REMOVE_SERVICE,
  SEARCH_CHANGE_FIELD_SERVICE,
} from "./actionTypes";

export const addService = (name, price) => ({ type: ADD_SERVICE, payload: { name, price } });
export const editService = (index, name, price) => ({ type: EDIT_SERVICE, payload: { index, name, price } });
export const editingService = (name, price, editingMode) => ({
  type: EDITING_SERVICE,
  payload: { name, price, editingMode },
});
export const endChangesService = () => ({ type: END_CHANGES_SERVICE, payload: {} });
export const formChangeFieldService = (name, value) => ({ type: FORM_CHANGE_FIELD_SERVICE, payload: { name, value } });
export const removeService = id => ({ type: REMOVE_SERVICE, payload: { id } });
export const searchChangeFieldService = (name, value) => ({
  type: SEARCH_CHANGE_FIELD_SERVICE,
  payload: { name, value },
});
