import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";
import { nanoid } from "nanoid";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;

      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case EDIT_SERVICE: {
      const { index, name, price } = action.payload;

      return [
        ...state.slice(0, index),
        { id: state[index].id, name: name, price: Number(price) },
        ...state.slice(index + 1),
      ];
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;

      return state.filter(service => service.id !== id);
    }
    default:
      return state;
  }
}
