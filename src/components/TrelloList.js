import React from "react";
import styled from "styled-components";
import TrelloCard from "../components/TrelloCard";
import { useDispatch } from "react-redux";
import TrelloAdd from "./TrelloAdd";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

import Icon from "@material-ui/core/Icon";
import { editList, deleteList } from "../modules/listReducer";

const ListContainer = styled.div`
  position: relative;
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;
const StyledInput = styled.input`
  width: 96.5%;
  border: none;
  outline-color: black;
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
const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${ListContainer}:hover & {
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
  margin-top: 3px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    color: #df013a;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;
function TrelloList({ title, cards, listID, list, index, id }) {
  const [edit, setEdit] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const dispatch = useDispatch();

  const titleChange = e => {
    setEdit(false);
    dispatch(editList(listID, listTitle));
  };
  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };
  const handleDelete = () => {
    dispatch(deleteList(listID));
  };

  const renderEditInput = () => {
    return (
      <form onSubmit={titleChange}>
        <StyledInput
          type="text"
          value={listTitle}
          onChange={handleChange}
          placeholder="수정후 enter를 입력하세요..."
        />
      </form>
    );
  };

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
                {edit ? (
                  renderEditInput()
                ) : (
                  <TitleContainer>
                    <EditButton
                      onMouseDown={() => setEdit(!edit)}
                      fontSize="small"
                    >
                      edit
                    </EditButton>
                    <DeleteButton onClick={handleDelete}>delete</DeleteButton>
                    <ListTitle> {title}</ListTitle>
                  </TitleContainer>
                )}
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => {
                    return (
                      <TrelloCard
                        //카드에는 텍스트 아이디 리스트
                        text={card.text}
                        key={card.id}
                        id={card.id}
                        index={index}
                        listID={listID}
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
