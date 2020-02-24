import React from "react";
import styled from "styled-components";
import TrelloCard from "../components/TrelloCard";
import { useSelector } from "react-redux";
import TrelloAdd from "./TrelloAdd";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const ListTitle = styled.h4`
  transition: 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

function TrelloList({ title, cards, listID, list, index }) {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div>
                <TitleContainer>
                  <ListTitle> {title}</ListTitle>
                </TitleContainer>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => {
                    return (
                      <TrelloCard
                        //카드에는 텍스트 아이디 리스트
                        text={card.text}
                        key={card.id}
                        id={card.id}
                        index={index}
                        list={listID}
                      />
                    );
                  })}
                  {provided.placeholder}
                  <TrelloAdd listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
}
export default TrelloList;
