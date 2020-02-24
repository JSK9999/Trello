import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import TrelloForm from "./TrelloForm";
import TrelloButton from "./TrelloButton";

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
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;
function TrelloCard({ text, id, index, listID }) {
  console.log(text);
  console.log(id);
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
    setEdit(false);
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
      <CardContainer>
        <Card>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Card>
      </CardContainer>
    );
  };
  console.log(text);
  console.log(id);

  return edit ? renderEditForm() : renderCard();
}
export default TrelloCard;
