const initialState = ["0리스트"];

const ADD_LIST = "ADD_LIST";
const DRAG_HAPPENED = "DRAG_HAPPENED";
export default function originReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      return [...state, `${action.payload.id}리스트`];
    }
    case DRAG_HAPPENED:
      const { droppableIndexStart, droppableIndexEnd, type } = action.payload;
      const newState = [...state];
      if (type === "list") {
        const pullList = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...pullList);
        return newState;
      }
      return state;
    default:
      return state;
  }
}
