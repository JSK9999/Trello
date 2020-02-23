const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";

export const addCard = () => ({ type: ADD_CARD });

const initialState = {
  "0번째카드": {
    text: "전에할일",
    id: `0번째 카드`,
    list: "0번째 리스트"
  }
};
export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
    default:
      return state;
  }
}
