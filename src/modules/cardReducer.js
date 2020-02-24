const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";

export const addCard = () => ({ type: ADD_CARD });

const initialState = {
  "0카드": {
    text: "전에할일",
    id: `0카드`,
    list: "0리스트"
  }
};
export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
    default:
      return state;
  }
}
