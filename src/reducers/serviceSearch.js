import { SEARCH_CHANGE_FIELD_SERVICE } from "../actions/actionTypes.js";

const initialState = { name: "" };

export default function serviceSearch(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE_FIELD_SERVICE: {
      const { name, value } = action.payload;

      return { ...state, [name]: value };
    }
    default:
      return state;
  }
}
