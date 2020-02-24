const initialState = ["0리스트"];

const ADD_LIST = "ADD_LIST";

export default function originReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      return [...state, `${action.payload.id}리스트`];
    }
    default:
      return state;
  }
}
