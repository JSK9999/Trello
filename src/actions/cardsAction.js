import { ALLACTIONS } from "../actions";
export const addCard = (listID, text) => {
  return {
    type: ALLACTIONS.ADD_CARD,
    payload: { text, listID }
  };
};
export const editCard = (id, listID, cardText) => {
  return {
    type: ALLACTIONS.EDIT_CARD,
    payload: { id, listID, cardText }
  };
};
