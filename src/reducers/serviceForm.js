import { EDITING_SERVICE, END_CHANGES_SERVICE, FORM_CHANGE_FIELD_SERVICE } from "../actions/actionTypes";

const initialState = { editingMode: { index: -1, state: false }, name: "", price: "" };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case EDITING_SERVICE: {
      const { editingMode, name, price } = action.payload;

      return { ...state, editingMode, name, price: String(price) };
    }
    case END_CHANGES_SERVICE:
      return initialState;
    case FORM_CHANGE_FIELD_SERVICE: {
      const { name, value } = action.payload;

      return { ...state, [name]: value };
    }
    default:
      return state;
  }
}
