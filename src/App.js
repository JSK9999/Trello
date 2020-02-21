import React from "react";
import TrelloList from "./components/TrelloList";
import { connect, useDispatch } from "react-redux";
import TrelloActionButton from "./components/TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./actions/listsActions";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background:#6E6E6E;
  }
`;

const mapStateToProps = state => ({
  lists: state.lists
});

const styles = {
  listsContainder: {
    display: "flex",
    flexDirection: "row"
  }
};

function App({ lists }) {
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    console.log(result);
    if (!destination) return;
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
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="akk-list" direction="horizontal" type="list">
        {provided => (
          <div
            style={styles.listsContainder}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists.map((list, index) => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                index={index}
              />
            ))}
            {provided.placeholder}
            <TrelloActionButton list />
            {/*카드 밖에 추가버튼 뜸 왜냐면 list 가 참값이니까.*/}
          </div>
        )}
      </Droppable>
      <GlobalStyle />
    </DragDropContext>
  );
}

export default connect(mapStateToProps)(App);
