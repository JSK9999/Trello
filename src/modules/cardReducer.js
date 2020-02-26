import uuid from "uuid/v4";
const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";
export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: ADD_CARD,
    payload: { listID, text, id }
  };
};
export const editCard = (id, listID, cardText) => {
  return {
    type: EDIT_CARD,
    payload: { id, listID, cardText }
  };
};
export const deleteCard = (id, listID) => {
  return {
    type: DELETE_CARD,
    payload: { id, listID }
  };
};
const initialState = {
  "0카드": {
    text: "안녕하세요 김재선 입니다 ",
    id: "0카드",
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
    case EDIT_CARD: {
      const { id, cardText } = action.payload;
      const card = state[id];
      card.text = cardText;
      return { ...state, [`${id}카드`]: card };
    }
    case DELETE_CARD: {
      const { id } = action.payload;
      const deleteState = state;
      delete deleteState[id];
      return deleteState;
    }
    default:
      return state;
  }
}
