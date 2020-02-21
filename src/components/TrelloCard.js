import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
function TrelloCard({ text, id, index }) {
  const styles = {
    cardContainer: {
      marginBottom: 8
    }
  };
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}
export default TrelloCard;
