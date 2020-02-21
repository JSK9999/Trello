import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8
  }
};

function TrelloList({ title, cards, listID, index }) {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <div style={styles.container}>
            <Droppable droppableId={String(listID)} type="card">
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <h4>{title}</h4>
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      index={index}
                      text={card.text}
                      id={card.id}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloActionButton listID={listID} />{" "}
                  {/*카드안에  list 가없으니까 false 이다.  */}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TrelloList;
