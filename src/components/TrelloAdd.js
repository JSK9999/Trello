import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCard } from "../modules/cardReducer";
import { addList } from "../modules/listReducer";

import TrelloForm from "./TrelloForm";
import TrelloButton from "./TrelloButton";
import TrelloOpenForm from "./TrelloOpenForm";

function TrelloAdd(props) {
  const { listID, list } = props;

  const dispatch = useDispatch();
  const [state, setState] = useState({
    formOpen: false,
    text: ""
  });

  const openForm = () => {
    setState({
      ...state,
      formOpen: true
    });
  };

  const closeForm = () => {
    setState({ formOpen: false });
  };

  const handleInputChange = e => {
    setState({
      ...state,
      text: e.target.value
    });
  };
  const handleAddList = () => {
    if (state.text) {
      setState({ text: "" });
    }
    dispatch(addList(state.text));
  };

  const handleAddCard = () => {
    if (state.text) {
      setState({ text: "" });
    }

    dispatch(addCard(listID, state.text));
  };

  return state.formOpen ? (
    <TrelloForm
      list={list}
      text={state.text}
      onChange={e => handleInputChange(e)}
      closeForm={closeForm}
    >
      <TrelloButton onClick={list ? handleAddList : handleAddCard}>
        {list ? "add list" : "add card"}
      </TrelloButton>
    </TrelloForm>
  ) : (
    <TrelloOpenForm list={list} onClick={openForm}>
      {list ? "리스트 추가" : "카드 추가"}
    </TrelloOpenForm>
  );
}

export default TrelloAdd;
