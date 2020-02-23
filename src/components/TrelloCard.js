import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent, Icon } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useState } from "react";

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
  & :hover {
    opacity: 0.8;
  }
`;

function TrelloCard({ text, id, index }) {
  const [edit, setEdit] = useState(false);

  const renderEditForm = () => {
    //이제 여기에 TrelloForm 으로 지정하고 파일만들어서 그 새 카드 창 나오게 해야한다.
    return <div> </div>;
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card>
              <EditButton onMouseDown={() => setEdit(true)}>edit</EditButton>
              <CardContent>
                <Typography gutterBottom>{text}</Typography>
              </CardContent>
            </Card>
            {provided.placeholder}
          </CardContainer>
        )}
      </Draggable>
    );
  };
  return edit ? renderEditForm() : renderCard();
}
export default TrelloCard;
