import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import TrelloForm from "./TrelloForm";
import TrelloButton from "./TrelloButton";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { editCard, deleteCard } from "../modules/cardReducer";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    color: #01df01;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    color: #df013a;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;
function TrelloCard({ text, id, index, listID }) {
  console.log(listID);
  console.log(id);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [cardText, setText] = useState(text);
  console.log(cardText);
  const closeForm = e => {
    setEdit(false);
  };
  const handleChange = e => {
    setText(e.target.value);
  };
  const saveCard = e => {
    e.preventDefault();
    dispatch(editCard(id, listID, cardText));
    setEdit(false);
  };
  const handleDeleteCard = e => {
    dispatch(deleteCard(id, listID));
  };
  const renderEditForm = () => {
    return (
      <TrelloForm
        text={cardText}
        onChange={e => handleChange(e)}
        closeForm={e => closeForm(e)}
      >
        <TrelloButton onClick={e => saveCard(e)}>save</TrelloButton>
      </TrelloForm>
    );
  };
  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {porvided => (
          <CardContainer
            {...porvided.draggableProps}
            {...porvided.dragHandleProps}
            ref={porvided.innerRef}
          >
            <Card>
              {cardText && (
                <EditButton onMouseDown={() => setEdit(true)} fontSize="small">
                  edit
                </EditButton>
              )}

              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };
  console.log(text);
  console.log(id);

  return edit ? renderEditForm() : renderCard();
}
export default TrelloCard;
