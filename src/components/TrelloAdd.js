import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCard } from "../modules/cardReducer";

function TrelloAdd(listID) {
  const { text } = useSelector(state => state.cards);
  const [cardText, setCardText] = useState(text);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    if (cardText) {
      dispatch(addCard(listID, cardText));
      setCardText("");
    }
  };
  return (
    <>
      <div>눌렀을때 나오게 해야함 </div>
    </>
  );
}

export default TrelloAdd;
