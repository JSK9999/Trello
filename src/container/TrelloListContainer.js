import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TrelloList from "../components/TrelloList";
import styled from "styled-components";
import TrelloAdd from "../components/TrelloAdd";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../modules/listReducer";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function TrelloListContainer() {
  const lists = useSelector(state => state.lists);
  const origin = useSelector(state => state.origin);
  console.log(origin);
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  console.log(lists);
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {origin.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map(cardID => cards[cardID]);

                  return (
                    <TrelloList
                      list={list}
                      listID={list.id}
                      title={list.title}
                      key={list.id}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <TrelloAdd list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
export default TrelloListContainer;
