import uuid from "uuid/v4";
const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: ADD_CARD,
    payload: { listID, text, id }
  };
};

const initialState = {
  "0카드": {
    text: "전에할일",
    id: `0카드`,
    list: "0리스트"
  }
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { listID, text, id } = action.payload;

      const newCard = {
        text,
        id: `${id}카드`,
        list: listID
      };
      return { ...state, [`${id}카드`]: newCard };
    }
    default:
      return state;
  }
}
